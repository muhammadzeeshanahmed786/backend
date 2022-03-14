const mongoose=require('mongoose')

let createUser=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    createdat:{
        type:String,
        required:true
    }
})

let User=mongoose.model('User',createUser)

module.exports=User