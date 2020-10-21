const con = require("../startConnection");

function getDetailsOfNearby(target,circle_diameter,{latitude,longitude}){
    return new Promise(function (resolve,reject){
        qry=`SELECT * , SQRT(
            POW(69.1 * (${`latitude`} - ${latitude}), 2) +
            POW(69.1 * (${longitude} - ${`longitude`}) * COS(${`latitude`} / 57.3), 2)) AS ${`distance`}
            FROM \`${target}\` HAVING ${`distance`} < ${circle_diameter} ORDER BY ${`distance`};`
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


module.exports.getDetailsOfNearby=getDetailsOfNearby;