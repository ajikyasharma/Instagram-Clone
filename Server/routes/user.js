const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')
const Post= mongoose.model("Post")
const User= mongoose.model("User")
const requireLogin= require('../middleware/requireLogin')


router.get('/user/:id',requireLogin, async(req,res)=>{
      try{
        const user= await User.findOne({_id: req.params.id})
        const posts = await Post.find({postedBy:req.params.id})

        res.json({user, posts})
      }
      catch(error){
        console.log("Error",err)
      }
})


module.exports= router