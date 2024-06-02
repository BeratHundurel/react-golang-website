package models
type Basket struct{
	Id int `db:"Id" json:"id"`
	UserId int `db:"UserId" json:"userId"`
	Amount float64 `db:"Amount" json:"amount"`
	BasketItems []BasketItem `json:"basketItems"`
}