const express = require("express");
const cookieParser=require("cookie-parser")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app=express();
app.use(cookieParser());

app.get("/", (req,res)=>{
    // res.cookie("name", "deepanshi");
    // res.send("done");
    // bcrypt.genSalt(10,function(err,salt){
    //     bcrypt.hash("Lucifer", salt, function(err, hash){
    //         console.log(hash);
    //     })
    // })
    let token = jwt.sign({email:"deepanshi@example.com"},"secret");
    res.cookie("token",token);
    res.send("done")
})

app.get("/read", (req,res)=>{
    // console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    res.send("read page");
})

app.listen(3000);