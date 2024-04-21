package services

import (
	data "github.com/BeratHundurel/react-golang-ecommerce/data"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
)

func GetProductList() ([]models.Product, error) {
	var products []models.Product
	err := data.DB.Select(&products, "SELECT * FROM Products")
	if err != nil {
		return nil, err
	}
	return products, nil
}
