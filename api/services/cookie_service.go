package services

import (
	"bytes"
	"encoding/base64"
	"encoding/gob"
	"net/http"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
)

// Function to set the basket cookie
func SetBasketCookie(w http.ResponseWriter, basket models.Basket) {
	var buffer bytes.Buffer

	// Create a new gob encoder and encode the basket
	encoder := gob.NewEncoder(&buffer)
	if err := encoder.Encode(basket); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Base64 encode the binary data
	encodedData := base64.StdEncoding.EncodeToString(buffer.Bytes())

	// Create and set the cookie
	cookie := http.Cookie{
		Name:  "basket",
		Value: encodedData,
		Path:  "/",
	}
	http.SetCookie(w, &cookie)
}

// Function to get the basket from the cookie
func GetBasketFromCookie(r *http.Request) (models.Basket, error) {
	var basket models.Basket

	// Get the cookie
	cookie, err := r.Cookie("basket")
	if err != nil {
		return basket, err
	}

	// Base64 decode the cookie value
	data, err := base64.StdEncoding.DecodeString(cookie.Value)
	if err != nil {
		return basket, err
	}

	// Create a new gob decoder and decode the data
	buffer := bytes.NewBuffer(data)
	decoder := gob.NewDecoder(buffer)
	if err := decoder.Decode(&basket); err != nil {
		return basket, err
	}

	return basket, nil
}