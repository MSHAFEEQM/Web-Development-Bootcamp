import axios from "axios";
import express from "express";

const app = express();
const port = 4000;
const API_URL = "https://secrets-api.appbrewery.com/random"

app.use(express.static("public"));

app.get("/", async (req,res)=>{
    try {
        const response = await axios.get(API_URL);
        const result= response.data
        console.log(result)
        res.render("index.ejs",{ secret: result.secret, user : result.username })
    } catch (error) {
        res.send(error)
    }
});

app.listen(port,()=>{
    console.log(`App running in port : ${port}`);
});

