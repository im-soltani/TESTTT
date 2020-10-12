const express=require("express")
const isAuthorize=require('../middlewares/isAuthorize')
const isAuthenticate=require('../middlewares/isAuth')
const router=express.Router()
const User=require("../models/User")



//get artisan
router.get('/allartisan',isAuthenticate,isAuthorize(['admin',false]),(req,res)=>{
  User.find({role:"artisan"})
  .then(artisans=>res.send(artisans))
  .catch(err=>console.log(err))
        });

//ban artisan or client by admin
router.put("/ban/:_id",isAuthenticate,isAuthorize(['admin',false]),(req,res)=>{

  const _id=req.params._id
  User.findOneAndUpdate({_id},{$set:{"banned":"true"}},{new:true})
  .then(user=>res.send(user))
  .catch(err=>console.log(err))
})
//unban artisan or client by admin
router.put("/unban/:_id",isAuthenticate,isAuthorize(['admin',false]),(req,res)=>{

  const _id=req.params._id
  User.findOneAndUpdate({_id},{$set:{"banned":"false"}},{new:true})
  .then(user=>res.send(user))
  .catch(err=>console.log(err))
})

module.exports=router