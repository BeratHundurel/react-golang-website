package models
type User struct{
	Id int `db:"Id" json:"id"`
	FirstName string `db:"FirstName" json:"firstName"`
	LastName string `db:"LastName" json:"lastName"`
	Email string `db:"Email" json:"email"`
	Password string `db:"Password" json:"password"`
}