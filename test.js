// Import the Database class from sqlitedb.js
const { Database } = require('./sqlitedb.js');

// Create an instance of the Database class
const db = new Database("test.db");

db.add_user("phubbles", "12345", "Phoebe", "Clayfer", "Bunnies", "1234567890", "phubbles@gmail.com");