package models
type ViewCategoryProduct struct {
	Name        string  `db:"Name" json:"name"`
	Description string  `db:"Description" json:"description"`
	Price       float64 `db:"Price" json:"price"`
	Stock       int     `db:"Stock" json:"stock"`
	Image       string  `db:"Image" json:"image"`
	CategoryId  int     `db:"CategoryId" json:"category_id"`
	ProductId   int     `db:"ProductId" json:"product_id"`
	CategoryName string `db:"CategoryName" json:"category_name"`
	CategoryImage string `db:"CategoryImage" json:"category_image"`
}