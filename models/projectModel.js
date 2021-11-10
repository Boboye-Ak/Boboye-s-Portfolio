const mongoose=require("mongoose")
const projectSchema=mongoose.Schema({
    id:{type:Number, required:true},
    projectName:{type:String, required:true},
    projectLink:{type:String, required:true},
    gitLink:{type:String, required:true},
    imgsrc:{type:String, required:true},
    description:{type:String, required:true}
})

const projectModel=mongoose.model("project", projectSchema)

module.exports=projectModel