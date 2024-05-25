package services

import (
	data "github.com/BeratHundurel/react-golang-ecommerce/data"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
)

func GetCategoryList() (<-chan []models.Categories, <-chan error) {
	categoriesCh := make(chan []models.Categories)
	errCh := make(chan error)

	go func() {
		var categories []models.Categories
		err := data.DB.Select(&categories, "SELECT * FROM Categories")
		if err != nil {
			errCh <- err
			return
		}
		categoriesCh <- categories
		close(categoriesCh)
	}()

	return categoriesCh, errCh
}

