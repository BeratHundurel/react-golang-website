package services

import (
	data "github.com/BeratHundurel/react-golang-ecommerce/data"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
)

func GetProductList() ([]models.Product, error) {
	var transactions []models.Product
	err := data.DB.Select(&transactions, "SELECT * FROM Products")
	if err != nil {
		return nil, err
	}
	return transactions, nil
}
