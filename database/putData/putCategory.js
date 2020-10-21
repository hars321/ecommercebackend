const con = require("../startConnection");
const generateUserIndex=require('../generateData/generateUserIndex.js')
function putData(category_name,category_description,category_image){
    return new Promise(function(resolve,reject){
        product_id=generateUserIndex.generateUserId();
        var qry=`INSERT INTO \`category\` (\`category_name\`, \`category_description\`, \`category_image\`) VALUES (\"${category_name}\",\"${category_description}\",\"${category_image}\");`
        
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