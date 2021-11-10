const mongoose=require("mongoose")
const {isEmail}=require("validator")
const messageSchema= mongoose.Schema({
    name:{type:String, required:true},
    message: {type:String, required:true},
    email: {type:String, required:true, validate:[isEmail,"Please enter a valid email"]},
    date: {type:Date}
})

const messageModel=mongoose.model("message", messageSchema)

module.exports=messageModel