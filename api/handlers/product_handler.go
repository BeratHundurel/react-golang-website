package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/BeratHundurel/react-golang-ecommerce/services"
)

func FetchAllProducts(w http.ResponseWriter, r *http.Request) {
	productsCh, errCh := services.GetProductList()
	select {
	case products := <-productsCh:
		productJSON, err := json.Marshal(products)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(productJSON)
	case err := <-errCh:
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func FetchProductsByCategoryId(w http.ResponseWriter, r *http.Request) {
	categoryIdStr := r.URL.Query().Get("category_id")
	categoryId, err := strconv.Atoi(categoryIdStr)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	productsCh, errCh := services.GetProductsByCategoryId(categoryId)
	select {
	case products := <-productsCh:
		productJSON, err := json.Marshal(products)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(productJSON)
	case err := <-errCh:
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
