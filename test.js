// Import the Database class from sqlitedb.js
const { Database } = require('./sqlitedb.js');

// Create an instance of the Database class
const db = new Database("test.db");

db.add_user("table_mabel", "55555", "Mabel", "Wood", "Tables", "5432112345", "table_mabel@gmail.com");

// Call the getAll() method on the database instance
db.modify_db("phubbles", "tommy", "trojan", "Bunnies", "1234567890", "t@gmail.com");
