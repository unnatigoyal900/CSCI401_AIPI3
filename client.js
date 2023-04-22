//import fetch from 'node-fetch';
//const fetch = require("node-fetch");
//const { DatabaseServer } = require('./server.js');
//import { DatabaseServer } from './server.js';

var result;
//const db = new DatabaseServer("test.db");
//db.start();

fetch('http://localhost:3000/getuserinfo/phubbles/first_name')
  .then(response => response.text())
  .then(data => {
    result = data;
  })
  .then(() => {
    // process result here
    console.log(result);
    //db.shutdown();
   })
  .catch(error => {
    console.error(error); // Log any errors
  });

/*
class DatabaseClient {
  constructor(dbpath) {
    this.db = new DatabaseServer(dbpath);
    this.db.start();
  }

  test() {
    return new Promise((resolve, reject) => {
      let result;
      fetch('http://localhost:3000/getuserinfo/phubbles/first_name')
        .then(response => response.text())
        .then(data => {
          result = data;
        })
        .then(() => {
          // process result here
          this.db.shutdown();
          resolve(result); // resolve the Promise with the result
        })
        .catch(error => {
          console.error(error);
          reject(error); // reject the Promise with the error
        });
    });
  }
  
}

module.exports = {
  DatabaseClient
};
*/  



