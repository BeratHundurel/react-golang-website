package services

import (
	"database/sql"
	"encoding/json"
	"net/http"

	data "github.com/BeratHundurel/react-golang-ecommerce/data"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
)

func GetProductList() (<-chan []models.ViewCategoryProduct, <-chan error) {
	productsCh := make(chan []models.ViewCategoryProduct)
	errCh := make(chan error)

	go func() {
		var products []models.ViewCategoryProduct
		err := data.DB.Select(&products, "SELECT * FROM ViewCategoryProduct")
		if err != nil {
			errCh <- err
			return
		}
		productsCh <- products
		close(productsCh)
	}()

	return productsCh, errCh
}

func GetProductsByCategoryId(categoryId int) (<-chan []models.ViewCategoryProduct, <-chan error) {
	productsCh := make(chan []models.ViewCategoryProduct)
	errCh := make(chan error)
	go func() {
		var products []models.ViewCategoryProduct
		err := data.DB.Select(&products, `SELECT * FROM ViewCategoryProduct WHERE CategoryId = @categoryId`, sql.Named("categoryId", categoryId))
		if err != nil {
			errCh <- err
			return
		}
		productsCh <- products
		close(productsCh)
	}()

	return productsCh, errCh
}

func GetProductsBySearch(search string) (<-chan []models.ViewCategoryProduct, <-chan error) {
	productsCh := make(chan []models.ViewCategoryProduct)
	errCh := make(chan error)
	go func() {
		var products []models.ViewCategoryProduct
		err := data.DB.Select(&products, `SELECT * FROM ViewCategoryProduct WHERE Name LIKE @search`, sql.Named("search", "%"+search+"%"))
		if err != nil {
			errCh <- err
			return
		}
		productsCh <- products
		close(productsCh)
	}()

	return productsCh, errCh
}

func HandleProductCases(product <-chan []models.ViewCategoryProduct, err <-chan error, w http.ResponseWriter) {
	select {
	case products := <-product:
		productJSON, err := json.Marshal(products)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(productJSON)
	case err := <-err:
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
