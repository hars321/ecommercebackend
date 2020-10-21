const con = require("../startConnection");
function getData(){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`seller\`;`
        
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

function getDatahavingCount(count) {
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`seller\` LIMIT ${count};`
        
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

function getDataAtLocation(circle_diameter,latitude,longitude){
    return new Promise(function (resolve,reject){
        qry=`SELECT * , SQRT(
            POW(69.1 * (${`latitude`} - ${latitude}), 2) +
            POW(69.1 * (${longitude} - ${`longitude`}) * COS(${`latitude`} / 57.3), 2)) AS ${`distance`}
            FROM \`seller\` HAVING ${`distance`} < ${circle_diameter} ORDER BY ${`distance`};`
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
module.exports.getData=getData;
module.exports.getDataAtLocation=getDataAtLocation;
module.exports.getDatahavingCount=getDatahavingCount;