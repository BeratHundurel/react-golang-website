package handlers

import (
	"encoding/json"
	"github.com/BeratHundurel/react-golang-ecommerce/services"
	"net/http"
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
