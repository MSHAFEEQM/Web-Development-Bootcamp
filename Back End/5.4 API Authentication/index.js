import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "MshafeeqM";
const yourPassword = "123456";
const yourAPIKey = "6d2270d7-afdb-4793-b2c3-62bef86a12bd";
const yourBearerToken = "bd0cce79-44dd-460b-9d6e-7812b73a6306";

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {

  try{
    const response  = await axios.get('https://secrets-api.appbrewery.com/random');
    const secret = response.data
    const secrets = [];
    secrets.push(secret)
    console.log(secret);
    res.render("index.ejs", { content: secrets });
  }
  catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {

  try { 
      const response = await axios('https://secrets-api.appbrewery.com/all?page=1',{
        auth:{
          username: yourUsername,
          password: yourPassword,
        },
      });
      const secret = response.data
      console.log(secret);
      res.render("index.ejs", { content: secret});

  } catch (error) {
    res.send(error);
  }

});

app.get("/apiKey", async (req, res) => {

  try {
          const response = await axios.get(API_URL+"filter?score=5&apiKey="+yourAPIKey);
          const secret = response.data
          console.log(secret);
          res.render("index.ejs", { content: secret});
  } catch (error) {
    res.send(error);
  }
  
});

app.get("/bearerToken", async (req, res) => {
   const id = Math.floor(Math.random()*10)
  try {
    const response = await axios.get(API_URL+"secrets/"+id, {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    const secret = response.data
    const secrets = [];
    secrets.push(secret)
    console.log(secret);
    res.render("index.ejs", { content: secrets });
  } catch (error) {
    res.send(error)
  }
  
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
