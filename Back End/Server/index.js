import express from "express";
import bodyParser from "body-parser"
import morgan from "morgan";

const app = express()
const port = 3000;

var address = {
    name : "Mohammed Shafeeq",
    age : 30,
    place : "Chappanangadi",
    pin : 676503,
    hobbies : ["Coding","Travelling","Gaming"]
}


app.get("/", (req,res)=>{
    // console.log(req)
    res.sendFile("/home/m_shafeeq_m/Desktop/2023 Web Bootcamp/Back End/Server/public/index.html")
})

app.use(bodyParser.urlencoded({extended : true }))
app.use(morgan('tiny'))
app.use((req,res,next)=>{
    console.log("Request Method : " + req.method);
    console.log("Request URL : " + req.url )
    next()
})

app.post("/login", (req,res)=>{
    if((req.body.username == "MSHAFEEQM" || req.body.username == "Mshafeeq") && req.body.password  == "123")
        res.render("/home/m_shafeeq_m/Desktop/2023 Web Bootcamp/Back End/Server/public/login.ejs",address)
    else
        res.sendFile("/home/m_shafeeq_m/Desktop/2023 Web Bootcamp/Back End/Server/public/failed.html")
})
app.get("/logindata",(req,res)=>{
    req.body.username  = "Mshafeeq"
    res.json(req.body)
    
})
app.get("/logout",(req,res)=>{
    res.redirect("/")
})

app.listen(port,()=>{
    console.log(`Server running in port ${port}`)
})
