package services

import (
	"database/sql"
	data "github.com/BeratHundurel/react-golang-ecommerce/data"
	"github.com/BeratHundurel/react-golang-ecommerce/models"
)

func GetUserById(userId int) models.AppUser {
	var user models.AppUser
	data.DB.Get(&user, "SELECT * FROM AppUser WHERE Id = @userId", sql.Named("userId", userId))
	if user.Id == 0 {
		return models.AppUser{}
	}
	return user
}
