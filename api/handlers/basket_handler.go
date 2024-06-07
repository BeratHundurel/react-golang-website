package handlers

import (
	"encoding/gob"
	"encoding/json"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
	"github.com/BeratHundurel/react-golang-ecommerce/services"
	"net/http"
)

func ManageBasket(w http.ResponseWriter, r *http.Request) {
	var request services.AddToBasketRequest

	gob.Register(models.Basket{})
	gob.Register([]models.BasketItem{})

	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	cookie, err := services.GetBasketFromCookie(r)
	if err != nil {
		basket, err := services.CreateBasket(request)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		services.SetBasketCookie(w, basket)
	} else {
		var basket models.Basket
		basket, err = services.UpdateBasket(cookie, request)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		services.SetBasketCookie(w, basket)
		w.WriteHeader(http.StatusOK)
	}
}
