package handlers

import (
	"encoding/json"
	"github.com/BeratHundurel/react-golang-ecommerce/services"
	"net/http"
)

func FetchAllProducts(w http.ResponseWriter, r *http.Request) {
	products, err := services.GetProductList()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	// Convert products to JSON
	productJSON, err := json.Marshal(products)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set Content-Type header
	w.Header().Set("Content-Type", "application/json")
	// Write JSON response
	w.Write(productJSON)
}
func HomePage(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Welcome to the Golang E-Commerce API!"))
}
