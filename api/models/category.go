package models
type Categories struct{
	Id int `db:"Id" json:"id"`
	Name string `db:"Name" json:"name"`
	Image string `db:"Image" json:"image"`
	
}