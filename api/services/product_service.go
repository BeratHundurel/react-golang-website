package services

import (
	data "github.com/BeratHundurel/react-golang-ecommerce/data"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
)

func GetProductList() (<-chan []models.Product, <-chan error) {
    productsCh := make(chan []models.Product)
    errCh := make(chan error)

    go func() {
        var products []models.Product
        err := data.DB.Select(&products, "SELECT * FROM Products")
        if err != nil {
            errCh <- err
            return
        }
        productsCh <- products
    }()

    return productsCh, errCh
}