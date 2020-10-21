const con = require("../startConnection");

function getUserLocation(user_id){
    return new Promise(function(resolve,reject){
        var qry=`Select ${`latitude`},${`longitude`} from ${`user`} where ${`user_id`}=${user_id};`
        con.query(qry, function (err, result, fields) {
            if(err){
                return reject(err);
            }
            else{
                var data=result[0];
                resolve(data);
            }
          });
    })
    
    
}

  module.exports.getUserLocation=getUserLocation;