const jwt=require("jsonwebtoken")
const Project=require("../models/projectModel")
const Message=require("../models/messageModel")
const cloudinary=require("../configs/cloudinary")
const key="boboyeportfoliolock"
module.exports.intro_get=(req, res)=>{
    res.render("intro")
}

module.exports.about_get=(req, res)=>{
    res.render("about")
}

module.exports.addproject_get=(req, res)=>{
    res.render("addproject")
}

module.exports.contact_get=(req, res)=>{
    res.render("contact")
}

module.exports.portfolio_get=(req, res)=>{
    res.render("portfolio")
}

module.exports.login_get=(req, res)=>{
    res.render("login")
}

module.exports.login_post=(req, res)=>{
    const {password}=req.body
    if (password===key){
        const token=jwt.sign({boboye:1}, "Boboyesecret", {expiresIn:3*24*60*60})
        res.cookie("jwt", token, {maxAge:3*24*60*60*1000, httpOnly:true})
        res.json({success:"success"})
    }
    else{
        res.json({error:"Incorrect password"})
    }
}

module.exports.addproject_post=async (req, res)=>{
    const {name, link, gitLink, descr}=req.body
    const projects=await Project.find({})
    const id=projects.length+1
    const image= await cloudinary.uploader.upload(req.file.path)
    const imgsrc=image.secure_url
    const newProject=await Project.create({id:id, projectName:name, projectLink:link, gitLink:gitLink, imgsrc:imgsrc, description:descr})

    res.json({project:newProject.projectName})


}

module.exports.get_projects2=async (req,res)=>{
    const projects=await Project.find({})
    res.json({projects:projects})
}

module.exports.get_deleteproject= (req, res)=>{
    res.render("deleteproject")
}

module.exports.post_deleteprojects=async (req, res)=>{
    const {id}=req.body
    await Project.deleteOne({id:id})
    res.json({success:"success"})

}

module.exports.contact_post=async (req, res)=>{
    const {name, email, message}=req.body
    date=Date.now()

    try{
    const newMessage=await Message.create({name:name, email:email, message:message, date:date})
    console.log(newMessage)
    res.json({success:newMessage})
    
    }

    catch (err){
        res.json({error:"Please fill all fields correctly"})
    }
    
    

}

module.exports.get_messages=(req, res)=>{
    res.render("messages")
}