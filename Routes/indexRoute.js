require('dotenv/config');
const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const session = require('express-session');
const flash = require('express-flash');
router.use(express.urlencoded({extended:false}))
router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())
router.use(express.urlencoded({ extended: true }));


router.get('/home',async(req,res)=>{
    res.render('index');

    
});

router.get("/home/team",async(req,res)=>{
    res.render('team');
});

router.get("/home/admin",async(req,res)=>{
    res.render('admin');
});




module.exports=router;