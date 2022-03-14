const mongoose = require('mongoose')



let userSignin=mongoose.Schema({
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
    }
    
})

let signin=mongoose.model('Signin',userSignin)

module.exports=signin