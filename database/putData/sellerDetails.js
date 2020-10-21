const con = require("../startConnection");
const generateUserIndex=require('../generateData/generateUserIndex.js')
function putData(seller_id,seller_name,latitude,longitude,seller_image,shop_id){
    return new Promise(function(resolve,reject){
        seller_id=generateUserIndex.generateUserId();
        var qry=`INSERT INTO \`seller\` (\`seller_id\`, \`seller_name\`, \`latitude\`, \`longitude\`, \`seller_image\`, \`shop_id\`) VALUES (\"${seller_id}\",\"${seller_name}\",${latitude},${longitude},\"${seller_image}\",\"${shop_id}\");`
        
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