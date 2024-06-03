package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/BeratHundurel/react-golang-ecommerce/models"
	"github.com/BeratHundurel/react-golang-ecommerce/services"
)

func ManageBasket(w http.ResponseWriter, r *http.Request) {
	var request services.AddToBasketRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	cookie, err := r.Cookie("basket")
	if err != nil || cookie.Value == "" {
		basket, err := services.CreateBasket(request)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		basketJson, err := json.Marshal(basket)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		cookie := http.Cookie{
			Name:  "basket",
			Value: string(basketJson),
			Path:  "/",
		}
		http.SetCookie(w, &cookie)
	} else {
		var basket models.Basket
		err := json.Unmarshal([]byte(cookie.Value), &basket)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		basket, err = services.UpdateBasket(basket, request)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		basketJson, err := json.Marshal(basket)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		cookie := http.Cookie{
			Name:  "basket",
			Value: string(basketJson),
			Path:  "/",
		}
		http.SetCookie(w, &cookie)
		w.WriteHeader(http.StatusOK)
	}
}
