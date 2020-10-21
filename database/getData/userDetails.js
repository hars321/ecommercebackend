const con = require("../startConnection");
function getData(){
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`user\`;`
        
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

function getDatawithId(id) {
    return new Promise(function(resolve,reject){
        var qry=`SELECT * FROM \`user\` where \`user_id\`=${id};`
        
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
module.exports.getData=getData;
module.exports.getDatawithId=getDatawithId;