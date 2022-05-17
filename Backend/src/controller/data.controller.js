
  const express=require('express');
const Data = require('../model/data.model');

  const router=express.Router();

  
  router.post("/", async(req,res)=>{
      try {
          const women=await Data.create(req.body);
          return res.status(200).send({product:women});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })
 
  router.get("",async(req,res)=>{
      try {
          const women=await Data.find().lean().exec();
          return res.status(200).send({product:women});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })

  router.get("/:id",async(req,res)=>{
    try {
        const women=await Data.findById(req.params.id).lean().exec();
        return res.status(200).send({product:women});
    } catch (error) {
        console.log(error);

          return res.status(400).send({message:error.message});
    }
})



  module.exports=router;
  