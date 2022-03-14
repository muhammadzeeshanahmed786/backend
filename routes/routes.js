
const express=require('express');

let routes=express.Router();
const {createUser}=require('../controller/data')
const {signIn} =require('../controller/sign-in-data')
const {createProducts,getProducts} =require('../controller/productsitem.js')

const { uploadImage } = require("../utils/multer");

routes.post('/signup',createUser)
routes.post('/signIn',signIn)
routes.post('/products',uploadImage().single("media"),createProducts)
routes.get('/products',getProducts)



module.exports=routes