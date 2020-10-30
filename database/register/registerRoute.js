var express = require('express');
const signup=require('./signup');
const login=require('./login');
var router = express.Router();


router.post('/signup', function(req, res){
  
   signup.putData(req.body).then(data=>res.status(200).send(data)).catch(err=>res.status(404).send(err));
   
 });

 router.post('/login', function(req, res){
   login.validateUser(req.body)
   .then(data=>{
    res.status(200);
    res.send(data)
   })
   .catch(err=>res.status(404).send(err));
 });

 router.post('/shop', function(req, res){
    res.send('GET route on things.');
 });

 module.exports=router;