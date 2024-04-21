package init_db

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	_ "github.com/microsoft/go-mssqldb"
)

var DB *sqlx.DB

func InitDB() {
    serverName := "DESKTOP-SKUL7E8\\MSSQLSERVER01"
    port := "1433"
    dbName := "golang-react-ecommerce"
    connString := fmt.Sprintf("Server=%s,%s;Database=%s;integrated security=True;multipleactiveresultsets=True;TrustServerCertificate=True;", serverName, port, dbName)
	db, err := sqlx.Open("sqlserver", connString)
	if err != nil {
		fmt.Println("Error connecting to SQL Server:", err.Error())
		return
	}
	// Test the connection
	err = db.Ping()
	if err != nil {
		fmt.Println("Error testing SQL Server connection:", err.Error())
		return
	}
	DB = db
	fmt.Println("Connected to SQL Server!")
}
