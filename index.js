console.log('run')


const express=require('express');
const  mongoose  = require('mongoose');
const app=express();
const createUserRoutes=require('./routes/routes')
const signIn =require('./routes/routes')
mongoose.connect("mongodb://localhost:27017/sign");
let Port=process.env.PORT || 3000
var cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/public", express.static("public"));

app.use('/',createUserRoutes)
app.use('/signin',signIn)



app.listen(Port,()=>{
    console.log('Port Start')
})