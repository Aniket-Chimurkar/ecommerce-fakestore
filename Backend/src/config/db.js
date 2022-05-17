
 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://pass:pass@cluster0.rs9rh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    
}
 
 module.exports=connectdb;
 