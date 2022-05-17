
 const mongoose=require('mongoose');

 const dataSchema= new mongoose.Schema({
     id:{type:Number ,require:true },
     title:{type:String,require:true},
     description:{type:String,require:true},
     price:{type:Number , require:true},
     category:{type:String ,require:true },
     image:{type:Number , require:true},
     rating:{type:Array,require:true}

 },{
     versionKey:false,
     timestamps:true
 });

 
 const Data=mongoose.model("product",dataSchema);
 module.exports=Data;
