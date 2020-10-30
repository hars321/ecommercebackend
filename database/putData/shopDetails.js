const con = require("../startConnection");
const generateUserIndex=require('../generateData/generateUserIndex.js')
function putData(shop_id,seller_id,shop_name,latitude,longitude){
    return new Promise(function(resolve,reject){
        shop_id=generateUserIndex.generateUserId();
        var qry=`INSERT INTO \`shop\` (\`shop_id\`,\`seller_id\`, \`shop_name\`, \`latitude\`, \`longitude\`) VALUES (\"${shop_id}\",\"${seller_id}\",\"${shop_name}\",${latitude},${longitude});`
        
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

module.exports.putData=putData;