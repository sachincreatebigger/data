import path from "path"
import multer from "multer"
import usercreateModel from "../modals/Usercreatemodel.js";
import crypto from 'crypto';
let create=async(req,res)=>{
console.log(req.body)
res.send("postcreate")
await usercreateModel.create({

name:req.body.name,
image:req.file.filename

})




}



//////user get
let user=async(req,res)=>{
try{
let response=await usercreateModel.find()
console.log(response)
res.json({response})
}
catch(err){


console.log(err)


}




}

////////
///////userdelet

let userdelet =async(req,res)=>{
try{
  let id=req.params.id
  let response=await usercreateModel.deleteOne({_id:id})
  res.json({response})

}
catch(err){

console.log(Error)


}

}





//////
//////
/////
////////
  

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
      crypto.randomBytes(12,function(err,bytes){
          let fn=bytes.toString("hex")+path.extname(file.originalname)
          cb(null, fn)


      })
         }
})
 const upload = multer({ storage: storage })
export {upload,create,user,userdelet}