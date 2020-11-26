const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    let payLoad={
        pageTitle:"Twitter. It's what's happening / Twitter"
    }
    res.render('index',payLoad);
})

module.exports=router;