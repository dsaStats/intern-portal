// Here you can define your Authentication & Authorization routes

const express = require('express');
const router = express.Router();



router.get("/login",async(req,res)=>{
    res.render("login");
});

router.get("/signup",async(req,res)=>{
    res.render("signup");
});

router.get("/forgetPassword",async(req,res)=>{
    res.render("psswdforget");
});




module.exports=router