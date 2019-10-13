package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

var port = "8080"

var db *sql.DB

// Product Struct
type Product struct {
	ProductID          string `json:"Product_ID"`
	ProductName        string `json:"Product_Name"`
	ProductDescription string `json:"Product_Description"`
	Price              int64  `json:"Price"`
	Stock              int64  `json:"Stock"`
	MainPhoto          string `json:"Main_photo"`
	FaceStyle          string `json:"Face_Style"`
	CaseMaterial       string `json:"Case_Material"`
	BandMaterial       string `json:"Band_Material"`
	Color              string `json:"Color"`
	Featured           string `json:"Featured"`
}

// Products type
type Products []Product

// Customer Struct
type Customer struct {
	CustomerID       int64  `json:"Customer_ID"`
	CustomerName     string `json:"Customer_Name"`
	Email            string `json:"Email"`
	Phone            string `json:"Phone"`
	PrefContact      string `json:"Pref_Contact"`
	DiscoveryMethods string `json:"Discovery_Methods"`
	CustomerComments string `json:"Customer_comments"`
}

// Customers type
type Customers []Customer

func main() {

	// DATABASE ENV
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env file")
	}
	dbName := os.Getenv("DB_NAME")
	dbUser := os.Getenv("DB_USERNAME")
	dbPass := os.Getenv("DB_PW")
	database, err := sql.Open("mysql", dbUser+":"+dbPass+"@tcp(dockertest_mysql_1:3306)/"+dbName)

	// database, err := sql.Open("mysql", "root:password@tcp(dockertest_mysql_1:3306)/test_db")

	// if err != nil {
	// 	panic(err)
	// } else {
	// 	fmt.Println("connected to db")
	// }

	db = database

	defer db.Close()

	router := mux.NewRouter()

	fs := http.FileServer(http.Dir("Public/"))
	router.HandleFunc("/contact", postCustomer).Methods("POST")
	router.HandleFunc("/products/{id}", getProduct).Methods("GET")
	router.HandleFunc("/products", getProducts).Methods("GET")
	router.PathPrefix("/").Handler(fs)
	http.Handle("/", router)

	fmt.Printf("Listening on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, router))

}

func getProduct(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	result, err := db.Query("SELECT Product_ID, Product_Name, Product_Description, Price, Stock, Main_photo, Face_Style, Case_Material, Band_Material, Color, Featured FROM Products WHERE Product_ID = ?", params["id"])
	if err != nil {
		panic(err.Error())
	}

	defer result.Close()

	var product Product

	for result.Next() {
		err := result.Scan(&product.ProductID, &product.ProductName, &product.ProductDescription, &product.Price, &product.Stock, &product.MainPhoto, &product.FaceStyle, &product.CaseMaterial, &product.BandMaterial, &product.Color, &product.Featured)
		if err != nil {
			panic(err.Error())
		}
	}
	json.NewEncoder(w).Encode(product)
}

func getProducts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var products []Product

	result, err := db.Query("SELECT Product_ID, Product_Name, Product_Description, Price, Stock, Main_photo, Face_Style, Case_Material, Band_Material, Color, Featured FROM Products")
	if err != nil {
		panic(err.Error())
	}

	defer result.Close()

	for result.Next() {
		var product Product
		err := result.Scan(&product.ProductID, &product.ProductName, &product.ProductDescription, &product.Price, &product.Stock, &product.MainPhoto, &product.FaceStyle, &product.CaseMaterial, &product.BandMaterial, &product.Color, &product.Featured)
		if err != nil {
			panic(err.Error())
		}
		products = append(products, product)
	}

	json.NewEncoder(w).Encode(products)
}

func postCustomer(w http.ResponseWriter, r *http.Request) {

	var customer Customer

	json.NewDecoder(r.Body).Decode(&customer)

	query := `INSERT INTO Customer (Customer_Name, Email, Phone, Pref_Contact, Discovery_Methods, Customer_comments) values (?,?,?,?,?,?)`

	res, err := db.Exec(query, customer.CustomerName, customer.Email, customer.Phone, customer.PrefContact, customer.DiscoveryMethods, customer.CustomerComments)
	if err != nil {
		fmt.Println(err)
		return
	}

	id, err := res.LastInsertId()

	if err != nil {
		fmt.Println(err)
		return
	}

	customer.CustomerID = id

	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(customer)
}
