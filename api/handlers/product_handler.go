package handlers

import (
	"github.com/BeratHundurel/react-golang-ecommerce/services"
	"net/http"
	"strconv"
)

func FetchAllProducts(w http.ResponseWriter, r *http.Request) {
	productsCh, errCh := services.GetProductList()
	services.HandleProductCases(productsCh, errCh, w)
}

func FetchProductsByCategoryId(w http.ResponseWriter, r *http.Request) {
	categoryIdStr := r.URL.Query().Get("category_id")
	categoryId, err := strconv.Atoi(categoryIdStr)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	productsCh, errCh := services.GetProductsByCategoryId(categoryId)
	services.HandleProductCases(productsCh, errCh, w)
}

func FetchProductsBySearch(w http.ResponseWriter, r *http.Request) {
	search := r.URL.Query().Get("search")
	productsCh, errCh := services.GetProductsBySearch(search)
	services.HandleProductCases(productsCh, errCh, w)
}
