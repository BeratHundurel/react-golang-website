package models

import (
	"database/sql"
)

type Basket struct {
	Id          int           `db:"Id" json:"id"`
	UserId      sql.NullInt64 `db:"UserId" json:"userId"`
	Amount      float64       `db:"Amount" json:"amount"`
	BasketItems []BasketItem  `db:"-" json:"basketItems"`
}
