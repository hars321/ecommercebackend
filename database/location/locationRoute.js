var express = require('express');
const sellerDetails= require('../getData/sellerDetails');
var router = express.Router();


router.get('/seller', function(req, res){
    var latitude=req.query.latitude;
    var longitude=req.query.longitude;
    var diameter=req.query.diameter;
    if(latitude==undefined || longitude==undefined){
        //go to seller details
        res.send(sellerDetails.getData());
    }
    else{
        //go to seller details with location
        res.send(sellerDetails.getDataAtLocation(diameter,latitude,longitude));
    }

 });
 
module.exports=router;