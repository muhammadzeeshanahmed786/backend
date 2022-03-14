const mongoose=require('mongoose')

let products=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
        required:true,
    },


})

let productsitem=mongoose.model('products',products)

module.exports=productsitem