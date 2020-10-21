var express = require('express');
const reqisterUser=require('../putData/userDetails');
var router = express.Router();


router.post('/user', function(req, res){
   //  putData
 });

 router.post('/seller', function(req, res){
    registerUser.putData(req.body).then(data=>res.status(200).send('data inserted')).catch(err=>res.status(404).send("error"));
 });

 router.post('/shop', function(req, res){
    res.send('GET route on things.');
 });

 module.exports=router;