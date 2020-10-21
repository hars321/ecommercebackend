const con = require("../startConnection");
function getData(){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`category\`;`
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
// function getDataAtLocation(circle_diameter,{latitude,longitude}){
//     return new Promise(function (resolve,reject){
//         qry=`SELECT * , SQRT(
//             POW(69.1 * (${`latitude`} - ${latitude}), 2) +
//             POW(69.1 * (${longitude} - ${`longitude`}) * COS(${`latitude`} / 57.3), 2)) AS ${`distance`}
//             FROM \`category\` HAVING ${`distance`} < ${circle_diameter} ORDER BY ${`distance`};`
//         con.query(qry,function(err,result,fields){
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(result);
//             }
//         });
//     });
    
// };

function getDatahavingCount(count){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`category\` LIMIT ${count};`
        
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
function getRandomCategoryHavingCount(count){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`category\` ORDER BY RAND() LIMIT ${count};`
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
module.exports.getData=getData;
module.exports.getDatahavingCount=getDatahavingCount;
module.exports.getRandomCategoryHavingCount=getRandomCategoryHavingCount