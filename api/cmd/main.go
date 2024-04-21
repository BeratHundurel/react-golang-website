package main

import (
	data "github.com/BeratHundurel/react-golang-ecommerce/data"
	"github.com/BeratHundurel/react-golang-ecommerce/routes"
)

func main() {
	data.InitDB()
	routes.SetRoutes()
}
