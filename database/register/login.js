const con = require("../startConnection");

function validateUser(data){
    return new Promise(function(resolve,reject){
    var email=data.user_email;
    var password=data.user_password;
    
    var qry=`SELECT user_id,user_name from \`user\` where \`user_email\`=\"${email}\" AND \`user_password\`=\"${password}\"`;
    con.query(qry,function(err,result,fields){
        
        if(result.length===0){
            reject('not found');
        }
        else if(err){
            reject(err);
        }
        else{
            var data=result[0];
            data=JSON.stringify({
                "user_id":data.user_id,
                "user_name":data.user_name
            })
            resolve(data);
            
            
        }
    })
})
}

module.exports.validateUser=validateUser;