const express=require('express');
const { User,validate } = require('../database/User');
const router=express.Router();



router.post('/new', async(req, res)=>{
    const {error}=validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    let user= await User.findOne({email:req.body.email});
    if(user) return res.status(400).send("User already existed");

    user=new User(req.body);
    user=await user.save();
    res.send(user);
});

router.get('/',async(req,res)=>{
    const users= await User.find();
    if(!users) return res.status(404).send("No Users Found");
    res.send(users);
});

module.exports=router;