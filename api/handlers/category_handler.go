package handlers

import (
	"encoding/json"
	"net/http"
	"github.com/BeratHundurel/react-golang-ecommerce/services"
)

func FetchAllCategories(w http.ResponseWriter, r *http.Request) {
	categoriesCh, errCh := services.GetCategoryList()
	select {
	case categories := <-categoriesCh:
		categoryJSON, err := json.Marshal(categories)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(categoryJSON)
	case err := <-errCh:
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
