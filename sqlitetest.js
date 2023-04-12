const sqlite3 = require('sqlite3').verbose();
// open the database
let db = new sqlite3.Database('test.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
        exit(1);
    } 
});

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        username TEXT primary key not null,
        password TEXT not null,
        first_name TEXT not null,
        organization TEXT not null
    );
`, ()  => {
    console.log('Create table');
});

// insert new users into the database
db.exec(`
    INSERT INTO users (username, password, first_name, organization)
        values ('phubbles', '12345', 'Phoebe', 'Bunnies'),
            ('livvy_812', '67890', 'Olivia', 'Strawberries'),
            ('lord_sator', '13579', 'Luke', 'Balloons');
`, ()  => {
    console.log('Insert users');
});

// check if a user is already in the database
let target = "phubbles";
db.get(`
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

// check if a user's password is correct
let username = 'livvy_812';
let password = '67890';
db.get(`SELECT EXISTS(SELECT 1 FROM users WHERE username = '${username}' AND password = '${password}') AS result`, (err, row) => {
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

// get the name of a user's organization
username = 'lord_sator';
db.get(`SELECT organization FROM users WHERE username = '${username}'`, (err, row) => {
  console.log('Getting name of user\'s organization');
  if (err) {
    console.error(err.message);
    return;
  }
  // if the user exists, print their email address to the console
  if (row) {
    console.log(row.organization);
  } else {
    console.log(`User with username ${username} does not exist`);
  }
});

db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
});
