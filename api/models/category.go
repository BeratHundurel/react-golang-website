package models

import "github.com/guregu/null"

type Categories struct{
	Id int `db:"Id" json:"id"`
	Name string `db:"Name" json:"name"`
	Image null.String `db:"Image" json:"image"`
}