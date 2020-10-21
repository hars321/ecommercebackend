const con = require("../startConnection");
const generateUserIndex=require('../generateData/generateUserIndex.js')
function putData(product_id,product_name,latitude,longitude,product_price,product_category,product_description,product_image){
    return new Promise(function(resolve,reject){
        product_id=generateUserIndex.generateUserId();
        var qry=`INSERT INTO \`product\` (\`product_id\`, \`product_name\`, \`latitude\`, \`longitude\`, \`product_price\`, \`product_category\`, \`product_description\`, \`product_image\`) VALUES (\"${product_id}\",\"${product_name}\",${latitude},${longitude},\"${product_price}\",\"${product_category}\",\"${product_description}\",\"${product_image}\");`
        
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