const sqlite3 = require('sqlite3').verbose();

class Database {
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

  async add_user(username, password, first_name, last_name, organization, phone_number, email) {
    const sql = `INSERT INTO users (username, password, first_name, last_name, organization, phone_number, email) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    this.db.run(sql, [username, password, first_name, last_name, organization, phone_number, email], function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`User with ID ${username} was successfully added`);
    });
  }

  async remove_user(username) {
    // Construct the SQL query
    const sql = `DELETE FROM users WHERE username = ?`;
    // Execute the query with the specified parameter
    this.db.run(sql, [username], function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`User with ID ${username} was successfully removed`);
    });
  }

  async check_user_exists(username) {
    let target = username;
    this.db.get(`
        SELECT EXISTS(SELECT 1 FROM users WHERE username = '${target}') AS result;
    `, (err, row)  => {
        console.log('Checking if target exists');
        if (err) {
            console.error(err.message);
        }
        if (row.result === 1) {
            console.log('Target found');
        } else {
            console.log('Target not found');
        }
    });
  }

  async validate_pass(username, password) {
    this.db.get(`SELECT EXISTS(SELECT 1 FROM users WHERE username = '${username}' AND password = '${password}') AS result`, (err, row) => {
    console.log('Checking if password matches')
    if (err) {
        console.error(err.message);
        return;
    }
    // if the username and password match, return 1, otherwise return 0
    if (row.result === 1) {
        console.log('Valid username and password');
    } else {
        console.log('Invalid username or password');
    }
    });
  }

  // get the name of a user's organization

  async get_user_info(username, col_name) {
    this.db.get(`SELECT ${col_name} FROM users WHERE username = '${username}'`, (err, row) => {
    if (err) {
        console.error(err.message);
        return;
    }
    // if the user exists, print their email address to the console
    var result;
    if (col_name.localeCompare("first_name") == 0) {
        result = row.first_name;
    }   
    if (col_name.localeCompare("last_name") == 0) {
        result = row.last_name;
    }    
    if (col_name.localeCompare("organization") == 0) {
        result = row.organization;
    }    
    if (col_name.localeCompare("phone_number") == 0) {
        result = row.phone_number;
    }    
    if (col_name.localeCompare("email") == 0) {
        result = row.email;
    }    
 

    if (row) {
        console.log(result);
    } else {
        console.log(`User with username ${username} does not exist`);
    }
    });
  }

  async modify_db(username, first_name, last_name, organization, phone_number, email) {
    // Construct the SQL query
    const sql = `UPDATE users SET first_name = ?, last_name = ?, organization = ?, phone_number = ?, email = ? WHERE username = ?`;

    // Execute the query with the specified parameters
    this.db.run(sql, [first_name, last_name, organization, phone_number, email, username], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row with ID ${username} was successfully updated`);
    });

  }

//   query(sql, params = []) {
//     return new Promise((resolve, reject) => {
//       this.db.all(sql, params, (err, rows) => {
//         if (err) return reject(err);
//         resolve(rows);
//       });
//     });
//   }




// //   async getAll(tableName) {
// //     const sql = `SELECT * FROM ${tableName}`;
// //     return await this.query(sql);
// //   }


//   async getOne(tableName, id) {
//     const sql = `SELECT * FROM ${tableName} WHERE id = ?`;
//     const result = await this.query(sql, [id]);
//     return result[0];
//   }

//   async create(tableName, data) {
//     const keys = Object.keys(data);
//     const values = Object.values(data);
//     const placeholders = new Array(keys.length).fill('?').join(',');
//     const sql = `INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${placeholders})`;
//     const result = await this.query(sql, values);
//     return result.lastID;
//   }

//   async update(tableName, id, data) {
//     const keys = Object.keys(data);
//     const values = Object.values(data);
//     const placeholders = keys.map(key => `${key} = ?`).join(',');
//     const sql = `UPDATE ${tableName} SET ${placeholders} WHERE id = ?`;
//     const result = await this.query(sql, [...values, id]);
//     return result.changes;
//   }

//   async delete(tableName, id) {
//     const sql = `DELETE FROM ${tableName} WHERE id = ?`;
//     const result = await this.query(sql, [id]);
//     return result.changes;
//   }
}



module.exports = {
    Database
  };


