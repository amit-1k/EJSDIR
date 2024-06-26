const express=require("express")
const app=express()
const path=require("path")

const port=9000

app.set("search engine","ejs")

app.set("views",path.join(__dirname,"/views"))

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/rolldice",(req,res)=>{
    let dicValue=Math.floor(Math.random()*6)+4
    res.render("rolldice.ejs",{dicValue})
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params
    const instaData=require("./data.json")
    const data=instaData[username]
    console.log(data)
})

app.listen(port,()=>{
    console.log("server started with the ",port)
})

