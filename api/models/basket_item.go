package models
type BasketItem struct{
	Id int `db:"Id" json:"id"`
	BasketId int `db:"BasketId" json:"basketId"`
	ProductId int `db:"ProductId" json:"productId"`
	Quantity int `db:"Quantity" json:"quantity"`
	Price float64 `db:"Price" json:"price"`
	Total float64 `db:"Total" json:"total"`
}