if(process.env.Node_ENV != "production"){
    require('dotenv').config()
}
const express = require('express');
const app=express();
const cors= require('cors');
const mongoose = require('mongoose');
const User= require('./models/User');

const url=process.env.URL;
mongoose.connect(url)
.then(()=>{console.log("db is connected")})
.catch((err)=>{console.log(err)})

app.use(cors());
app.use(express.json());

app.post("/data",(req,res)=>{
    const data=req.body;
    console.log(data);
    const user=new User(req.body);
    user.save()
    .then(()=>{console.log("user saved")})
    .catch((err)=>{console.log(err)});
    res.json();
})

app.get("/data",(req,res)=>{
    
     const data=User.find({})
    .then((d)=>{res.json(d)})
    .catch((err)=>{console.log(err)});
})

app.listen(8000,(req,res)=>{
    console.log('Server is running on port 8000');
})