package helpers

import (
	"database/sql"
)

func IntToNullInt64(value int64) sql.NullInt64 {
	if value == 0 {
		return sql.NullInt64{}
	}
	return sql.NullInt64{
		Int64: value,
		Valid: true,
	}
}
