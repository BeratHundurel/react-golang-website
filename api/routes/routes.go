package routes

import (
	"net/http"

	handlers "github.com/BeratHundurel/react-golang-ecommerce/handlers"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
)

func SetRoutes() {
	r := chi.NewRouter()
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS", "FETCH"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
	}))
	r.Post("/fetchProducts", handlers.FetchAllProducts)
	r.Post("/fetchCategories", handlers.FetchAllCategories)
	r.Get("/products", handlers.FetchProductsByCategoryId)
	http.ListenAndServe(":3000", r)
}
