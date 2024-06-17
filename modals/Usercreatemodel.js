import mongoose from "mongoose";
let createuserschema=new mongoose.Schema({
name:'String',
image:'String'

})
let usercreateModel=mongoose.model('imagedata',createuserschema)
export default usercreateModel