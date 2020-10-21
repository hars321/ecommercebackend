const mysql=require('mysql');

const host = "db4free.net";

// Get the User for DB from Environment or use default
const user = "harshit138";

// Get the Password for DB from Environment or use default
const password = "5p-!ZX6cGcgY8F!";

// Get the Database from Environment or use default
const database = "socialnetwork138";


const con = mysql.createConnection({
    host, user, password, database,
  });

con.connect(function (err) {
      if(err){
          console.log("cannot connect to the database");
      }
      else{
          console.log("connected successfully");
      }    
  })

  
  
  module.exports=con;
  