const express=require('express');
const router=express.Router();
const heroSchema=require("../models/heros");
//crear hero
router.post("/heros",(req,res)=>{
    const hero =heroSchema(req.body);
    hero
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});
//conseguir todos
router.get("/heros",(req,res)=>{
    heroSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});
//conseguir uno
router.get("/heros/:id",(req,res)=>{
    const {id}=req.params;
    heroSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});
//actualizar uno
router.put("/heros/:id",(req,res)=>{
    const {id}=req.params;
    const {nombre,NumDePelis,company}= req.body;
    heroSchema
    .updateOne({_id:id},{$set:{nombre,NumDePelis,company}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});
//eliminar uno
router.delete("/heros/:id",(req,res)=>{
    const {id}=req.params;
    heroSchema
    .deleteOne({ _id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});
module.exports=router;
