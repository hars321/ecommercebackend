const express=require('express');
const app=express();
const fs = require("fs");
const bodyParser = require('body-parser')
const cors = require('cors');
const con = require('./database/startConnection.js');
const { timeStamp } = require('console');
const { userInfo } = require('os');
const port=process.env.PORT ||4000;
const getData=require('./database/getData/getDataRoute');
const putData=require('./database/putData/putDataRoute');
const register=require('./database/register/registerRoute');
const location=require('./database/location/locationRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next();
  });

app.use('/getdata',getData);
app.use('/putdata',putData);
app.use('/register',register);
app.use('/location',location);
// app.get('/getCategory',(req,res)=>{
//   getCategory.getData();
  
//   // putData.newUser(user_name,user_email,user_password,user_image,type);
//   res.send('1');
// })
// app.post('/register',(req,res)=>{
//   // var {user_id,user_name,user_email,user_password,user_image,user_type
//   // ,latitude,longitude}=req.body;
//   // console.log(req.body);
//   putUserData.insertInDB(req.body).then(res.status(200).send('inserted')).catch(res.status(404).send('error'));
// })
// app.get('/register',(req,res)=>{
//   getUserData.getFromDB().then(data=>console.log(data)).catch(err=>console.log(err));
// })
// app.get('/gps',(req,res)=>{
//   var a=getCurrentLocation.tryAPIGeolocation();
//   res.send(a);
// })
// app.get('/location',(req,res)=>{
//   getUserId().then(user_id=>{
//     getUserLocationWithID.getUserLocation(user_id).then(
//       data=>{
//         var target="shop";
//         var circle_diameter=100;
//         getLocation.getDetailsOfNearby(target,circle_diameter,data).then(
//           field=>{res.send(field);}
//         );
  
//       }
//     ).catch(err=>res.send(err));
//   })
 


// })

app.listen(port,(req,res)=>{
    console.log('listening on 4000');
})


