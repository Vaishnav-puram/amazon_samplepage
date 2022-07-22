const express=require("express");
const app=express(); 
const port=process.env.PORT||5000;
const cors=require("cors");
app.use(express.json());
app.use(express.text());
app.use(cors());
app.get('/',(req,res,next)=>{
    console.log(req.body.email); 
    // res.send("welcome to home page");
    res.json({
        message:"welcome to home page"
    })
})
app.get("/about",(req,res)=>{
    console.log(req.body); 
    res.send("welcome to about page");
})
// app.post("/about",(req,res)=>{
//     console.log(req.body); 
//     res.send("welcome to about page");
// })
app.get("/signin",(req,res)=>{
    res.send("welcome to signin page");
})

//importing LoginRouter
const LoginRouter=require("../../../../assign/database/demo/routers/LoginPage")
app.use('/test',LoginRouter);
// app.use('/test',LoginRouter);


// app.use("*",(req,res)=>{ // always write this error handling method below other routes 
//     console.log("404 page not found!!!")
//     // res.send("404 page not found!!!")
//     // res.sendStatus(404)
//     res.status(404).send("404 page not found!!!")
// })
app.listen(port,()=>{
    console.log(`listing port:${port} !!!`)
})