package services

import (
	"database/sql"
	data "github.com/BeratHundurel/react-golang-ecommerce/data"
	"github.com/BeratHundurel/react-golang-ecommerce/helpers"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
)

type AddToBasketRequest struct {
	UserId    int `json:"userId"`
	ProductId int `json:"productId"`
	Quantity  int `json:"quantity"`
}

// CreateBasket creates a new basket for a user and adds a product to it.
// It takes an AddToBasketRequest as input and returns a models.Basket and an error.
// The AddToBasketRequest contains the product ID, user ID, and quantity.
// If the product ID or user ID is invalid, it returns an empty models.Basket and an error.
// If the basket creation or insertion of the basket item fails, it returns an empty models.Basket and an error.
func CreateBasket(request AddToBasketRequest) (models.Basket, error) {
	product, err := GetProductById(request.ProductId)
	if err != nil {
		return models.Basket{}, err
	}

	user := GetUserById(request.UserId)

	basket := models.Basket{}
	basket, err = insertBasket(helpers.IntToNullInt64(int64(user.Id)), product.Price, float64(request.Quantity))
	if err != nil {
		return models.Basket{}, err
	}

	basketItemError := insertBasketItem(basket, product, request)
	if basketItemError != nil {
		return models.Basket{}, basketItemError
	}
	return basket, nil
}

// UpdateBasket updates the given basket with the provided request.
// It checks if the basket already contains an item with the same product ID.
// If it does, it updates the existing item with the new request.
// If it doesn't, it inserts a new item into the basket based on the request.
// The updated basket is returned along with any error that occurred during the update process.
func UpdateBasket(basket models.Basket, request AddToBasketRequest) (models.Basket, error) {
	basketItem := GetBasketItemByBasketIdAndProductId(basket.Id, request.ProductId)
	if basketItem.Id != 0 {
		err := updateBasketItem(basketItem, request)
		if err != nil {
			return models.Basket{}, err
		}
	} else {
		product, err := GetProductById(request.ProductId)
		if err != nil {
			return models.Basket{}, err
		}
		basketItemError := insertBasketItem(basket, product, request)
		if basketItemError != nil {
			return models.Basket{}, basketItemError
		}
	}
	return basket, nil
}

// updateBasketItem updates the quantity and total price of a basket item based on the provided request.
// It takes a basket item and an AddToBasketRequest as parameters and returns an error if any.
func updateBasketItem(basketItem models.BasketItem, request AddToBasketRequest) error {
	basketItem.Quantity += request.Quantity
	basketItem.Total = basketItem.Price * float64(basketItem.Quantity)
	_, err := data.DB.Exec("UPDATE BasketItem SET Quantity = @Quantity, Total = @Total WHERE Id = @Id", sql.Named("Quantity", basketItem.Quantity), sql.Named("Total", basketItem.Total), sql.Named("Id", basketItem.Id))
	if err != nil {
		return err
	}
	return nil
}

// insertBasket inserts a new basket into the database for the given user with the specified price and quantity.
// It returns the newly created basket and any error encountered.
func insertBasket(userId sql.NullInt64, price float64, quantity float64) (models.Basket, error) {
	basket := models.Basket{
		UserId: userId,
		Amount: price * quantity,
	}
	var insertedBasket models.Basket
	query := `
    INSERT INTO Basket (UserId, Amount)
    OUTPUT INSERTED.Id, INSERTED.UserId, INSERTED.Amount
    VALUES (@UserId, @Amount)`
	err := data.DB.Get(&insertedBasket, query, sql.Named("UserId", userId), sql.Named("Amount", basket.Amount))
	if err != nil {
		return models.Basket{}, err
	}
	return insertedBasket, nil
}

// insertBasketItem inserts a new basket item into the database.
// It takes a basket, product, and request as input parameters.
// The basket item is created using the basket, product, and request information.
// The basket item is then inserted into the database using a SQL query.
// If an error occurs during the insertion, it is returned.
// Otherwise, nil is returned.
func insertBasketItem(basket models.Basket, product models.Product, request AddToBasketRequest) error {
	basketItem := models.BasketItem{
		BasketId:  basket.Id,
		ProductId: product.Id,
		Quantity:  request.Quantity,
		Price:     product.Price,
		Total:     product.Price * float64(request.Quantity),
	}

	query := `
	INSERT INTO BasketItem (BasketId, ProductId, Quantity, Price, Total)
	OUTPUT INSERTED.Id, INSERTED.BasketId, INSERTED.ProductId, INSERTED.Quantity, INSERTED.Price, INSERTED.Total
	VALUES (@BasketId, @ProductId, @Quantity, @Price, @Total)`

	err := data.DB.Get(&basketItem, query, sql.Named("BasketId", basket.Id), sql.Named("ProductId", product.Id), sql.Named("Quantity", request.Quantity), sql.Named("Price", product.Price), sql.Named("Total", basketItem.Total))
	if err != nil {
		return err
	}
	return nil
}

// GetBasketItemByBasketIdAndProductId retrieves a basket item from the database based on the given basket ID and product ID.
// If the basket item is found, it is returned. Otherwise, an empty basket item is returned.
func GetBasketItemByBasketIdAndProductId(basketId int, productId int) models.BasketItem {
	basketItem := models.BasketItem{}
	err := data.DB.Get(&basketItem, "SELECT * FROM BasketItem WHERE BasketId = @BasketId AND ProductId = @ProductId", sql.Named("BasketId", basketId), sql.Named("ProductId", productId))
	if err != nil {
		return models.BasketItem{}
	}
	return basketItem
}
