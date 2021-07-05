const express=require("express");
const app=express();
const port=process.env.PORT || 4000;
const path =require("path");
const hbs=require("hbs");


const staticpath=path.join(__dirname,"../public");
const appPath=path.join(__dirname,"../templates/views");
const partial_paths=path.join(__dirname,"../templates/partials");
// app.use(express.static(staticpath));
app.set("view engine",'hbs');
app.set("views",appPath);
hbs.registerPartials(partial_paths);

app.use(express.static(staticpath))
app.get("/",(req,res)=>{
// res.send("Welcome to thapa  technical")
res.render("index");

})
app.get("/about",(req,res)=>{
    res.render("about")
    
    })
app.get("/wheather",(req,res)=>{


    
    res.render("wheather");

})
app.get("*",(req,res)=>{
res.send("404 Error page");
            
            })

app.listen(port,()=>{
    console.log("listening to port number 4000")
})


