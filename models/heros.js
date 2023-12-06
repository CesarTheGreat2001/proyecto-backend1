const mongoose=require("mongoose");
const heroSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    NumDePelis:{
        type:Number,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    poderes:{
        type:String,
        required:true
    },
    ActRes:{
        type:String,
        required:true
    },
    team:{
        type:String,
        required:true
    },
    NombreVerdadero:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('heros',heroSchema);