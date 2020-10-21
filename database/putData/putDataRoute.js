const express = require('express');
const router = express.Router();
const generateUserIndex=require('../generateData/generateUserIndex');
const productDetails=require('./productDetails.js');
const sellerDetails=require('./sellerDetails.js');
const shopDetails=require('./shopDetails.js');
const userDetails=require('./userDetails.js');

router.post('/product',(req,res)=>{
    
    var {product_id,product_name,latitude,longitude,product_price,product_category,product_description,product_image}=req.body;
    productDetails.putData(product_id,product_name,latitude,longitude,product_price,product_category,product_description,product_image)
    .then(data=>res.status(200).send(data))
    .catch(err=>res.status(404).send(err));

})
router.post('/seller',(req,res)=>{
    var{seller_id,seller_name,latitude,longitude,seller_image,shop_id}=req.body;
})
router.post('/shop',(req,res)=>{
    var{shop_id,seller_id,shop_name,latitude,longitude}=req.body;
})
module.exports=router;