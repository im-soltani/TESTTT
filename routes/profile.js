const express=require("express")
const isAuthorize=require('../middlewares/isAuthorize')
const isAuthenticate=require('../middlewares/isAuth')
const router=express.Router()
const Profile=require("../models/Profile")
const User=require("../models/User")

//CRUD Profile do by artisan
// add Profile artisan
router.post('/addprofile',isAuthenticate,isAuthorize(['artisan',false]),(req,res)=>{
    const user =req.user.id
    const {profileName,avatar,speciality,category,description,adress,
        codePostal,phoneNumber,Diploma,Rating }=req.body

    const profile= new Profile({user,profileName,avatar,speciality,category,description,adress,codePostal,phoneNumber,Diploma,Rating})
     profile.save()
     .then(profile=>res.send(profile))
     .catch(err=>console.log(err))
          });

// get all Profile artisan
router.get('/allprofile',(req,res)=>{
    Profile.find().populate("user")
    .then(profiles=>res.send(profiles))
    .catch(err=>console.log(err))
          });
// Delete Profile artisan
router.delete("/deleteartisan/:_id",isAuthenticate,isAuthorize(['artisan',false]),(req,res)=>{
    const user = req.user.id
    const _id=req.params._id

    Profile.findOneAndDelete({user: req.user.id,_id})
    .then(profiles=>res.send(profiles))
    .catch(err=>console.log(err))
})
// edit Profile artisan
router.put("/editprofile/:_id",isAuthenticate,isAuthorize(['artisan',false]),(req,res)=>{
    const user = req.user.id
    const _id=req.params._id

    const {profileName,avatar,speciality,category,description,adress,
        codePostal,phoneNumber,Diploma,Rating }=req.body
       

    Profile.findOneAndUpdate({user,_id},{$set:{profileName,avatar,speciality,category,description,adress,
        codePostal,phoneNumber,Diploma,Rating}},{useFindAndModify: false})
    .then(profiles=>res.send(profiles))
    .catch(err=>console.log(err))
})


// @route  GET api/profile
// @desc   Get current user's profile

router.get("/currentprofile",isAuthenticate,(req, res) => {
    
    Profile.findOne({ user: req.user.id }).populate("user", ["firstName", "lastName"]) 
      .then(profile =>res.json(profile))
      .catch(err=>console.log(err))
        });
// @route  GET Profile by id

router.get("/profil/:_id",(req, res) => {
    
    Profile.findOne({ _id:req.params._id })
      .then(profile =>res.json(profile))
      .catch(err=>console.log(err))
            });

             ///Rating

  router.post('/:id/reviews',isAuthenticate, async (req, res) => {
    const profile = await Profile.findById(req.params.id);
    if (profile) {
      const review = {
        name: req.body.name,
        Rating: Number(req.body.Rating),
        comment: req.body.comment,
      };
      profile.reviews.push(review);
      profile.numReviews = profile.reviews.length;
      profile.Rating =
        profile.reviews.reduce((a, c) => c.Rating + a, 0) /
        profile.reviews.length;
      const updatedProfile = await profile.save();
      res.status(201).send({
        data: updatedProfile.reviews[updatedProfile.reviews.length - 1],
        message: 'Review saved successfully.',
      });
    } else {
      res.status(404).send({ message: 'Profile Not Found' });
    }
  });

module.exports=router