
const generateData=require('../generateData/generateUserIndex');
const con = require('../startConnection');

function putData(body){
    return new Promise(function(resolve,reject){
        var user_id=generateData.generateUserId();
        var {user_name,user_email,user_password,user_image,user_type,latitude,longitude}=body;
    
        var qry=`INSERT INTO \`user\` (\`user_id\`,\`user_name\`,\`user_email\`,\`user_password\`,\`user_image\`,\`user_type\`,\`latitude\`,\`longitude\`) VALUES (\"${user_id}\",\"${user_name}\",\"${user_email}\",\"${user_password}\",\"${user_image}\",${user_type},${latitude},${longitude});`
    
        con.query(qry,function(err,result,fields){
            if(err){
                reject(err);
            }
            else{
                data=JSON.stringify({
                    "user_id":user_id,
                    "user_name":user_name
                })
                resolve(data);
            }
        })
    })
};

module.exports.putData=putData;