const http = require("http");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();


// create database connection
const db = new sqlite3.Database("test.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the database.");
  }
});

// create server
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers", "Access-Control-Allow-Origin");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    const arr = req.url.split("/");
    if (arr[1] === "get_user_info") {
        // query the database
        const username = arr[2];
        const columnName = arr[3];
        const sql = `SELECT ${columnName} FROM users WHERE username = ?`;
        db.get(sql, [username], (err, row) => {
            if (err) {
                console.error(err.message);
                res.statusCode = 500;
                res.end("Internal Server Error");
            } else if (!row) {
                // username not found in the database
                res.statusCode = 404;
                res.end("User not found");
            } else {
                // send the data to the client-side JavaScript file as a string
                res.setHeader("Content-Type", "text/plain");
                res.statusCode = 200;
                res.end(row[columnName]);
            }
        });
    } else if (arr[1] === "add_user") {
        const sql = `INSERT INTO users (username, password, first_name, last_name, organization, phone_number, email) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.run(sql, [arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]], function(err) {
            if (err) {
                console.error(err.message);
            }
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

// start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/*
class DatabaseServer {
    constructor(dbPath) {
      this.db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
      this.db.exec(`
          CREATE TABLE IF NOT EXISTS users (
              username TEXT primary key not null,
              password TEXT not null,
              first_name TEXT not null,
              last_name TEXT not null,
              organization TEXT not null,
              phone_number TEXT not null,
              email TEXT not null
          );
      `, ()  => {
      });
    }
  
    start() {
        // create server
        this.server = http.createServer((req, res) => {
            if (req.url === "/getuserinfo/phubbles/first_name") {
                // query the database
                const arr = req.url.split("/");
                const username = arr[2];
                const columnName = arr[3];
                const sql = `SELECT ${columnName} FROM users WHERE username = ?`;
                this.db.get(sql, [username], (err, row) => {
                    if (err) {
                    console.error(err.message);
                    res.statusCode = 500;
                    res.end("Internal Server Error");
                    } else {
                    // send the data to the client-side JavaScript file as a string
                    res.setHeader("Content-Type", "text/plain");
                    res.statusCode = 200;
                    res.end(row[columnName]);
                    }
                });
            } else {
                res.statusCode = 404;
                res.end("Not Found");
            }
        });
        
        // start server
        const PORT = process.env.PORT || 3000;
        this.server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }

    shutdown() {
      this.server.close();
    }
}
    
export { DatabaseServer };
/*
module.exports = {
    DatabaseServer
};*/