const con = require("../startConnection");
function getData(){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`product\`;`
        
        con.query(qry,function(err,result,fields){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
    
}
function getProductWithId(id) {
    console.log(id)
    return new Promise(function (resolve,reject) {
        qry=`SELECT * FROM \`product\` where product_id=${id};`
        
        con.query(qry,function(err,result,fields){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });

};
function getDataAtLocation(circle_diameter,{latitude,longitude}){
    return new Promise(function (resolve,reject){
        qry=`SELECT * , SQRT(
            POW(69.1 * (${`latitude`} - ${latitude}), 2) +
            POW(69.1 * (${longitude} - ${`longitude`}) * COS(${`latitude`} / 57.3), 2)) AS ${`distance`}
            FROM \`product\` HAVING ${`distance`} < ${circle_diameter} ORDER BY ${`distance`};`
        con.query(qry,function(err,result,fields){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
    
};
function getDatahavingCount(count){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`product\` LIMIT ${count};`
        
        con.query(qry,function(err,result,fields){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}
function getRandomProductHavingCount(count){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`product\` ORDER BY RAND() LIMIT ${count};`
        console.log("e");
        con.query(qry,function(err,result,fields){
            if(err){
                reject(err);
            }
            else{
                console.log(result);
                resolve(result);
            }
        })
    })
}

module.exports.getProductWithId=getProductWithId;
module.exports.getData=getData;
module.exports.getDatahavingCount=getDatahavingCount;
module.exports.getDataAtLocation=getDataAtLocation;
module.exports.getRandomProductHavingCount=getRandomProductHavingCount;