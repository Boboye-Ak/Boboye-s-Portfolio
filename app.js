const express=require("express")
const cookieParser=require("cookie-parser")
const mongoose=require("mongoose")
const ejs=require("ejs")
const router = require("./routers/pagerouters")
const path=require("path")

mongoose.connect("mongodb+srv://boboye:boboye@cluster0.r1cxf.mongodb.net/portfolio?retryWrites=true&w=majority")



const port=process.env.PORT||5000


const app=express()

//Middleware
app.use(express.json())
app.use(cookieParser())
app.use("/", router)
app.use(express.static("assets"))

//Set view engine
app.set("view engine", "ejs")


app.get("/", (req, res)=>{
    res.render("intro")
})
app.all("*", (req, res)=>{
    res.render("error")
})

app.listen(port, ()=>{
    console.log("Server active")
})