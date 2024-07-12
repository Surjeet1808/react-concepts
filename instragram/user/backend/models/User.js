const mongoose=require ('mongoose');
const Schema=mongoose.Schema;
const Model=mongoose.model;

const userSchema=new Schema({
    name:String,
    password:String
})

const Instrauser=Model('Instrauser',userSchema);


module.exports=Instrauser;