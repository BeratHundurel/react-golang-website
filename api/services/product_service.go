package services

import (
	"database/sql"
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
