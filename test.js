// Import the Database class from sqlitedb.js
const { Database } = require('./sqlitedb.js');

// Create an instance of the Database class
const db = new Database("test.db");

db.remove_user("hannah_banana");