package models

type Product struct {
	Id          int     `db:"Id" json:"id"`
	Name        string  `db:"Name" json:"name"`
	Description string  `db:"Description" json:"description"`
	Price       float64 `db:"Price" json:"price"`
	Quantity    int     `db:"Quantity" json:"quantity"`
	Image       string  `db:"Image" json:"image"`
	Category    string  `db:"Category" json:"category"`
}
