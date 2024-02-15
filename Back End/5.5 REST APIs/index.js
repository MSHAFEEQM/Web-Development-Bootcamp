import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourBearerToken = "bd0cce79-44dd-460b-9d6e-7812b73a6306"; 
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });  
  }
});

app.post("/post-secret", async (req, res) => {

  try {
        const response = await axios.post(API_URL+"/secrets",req.body,config);
        res.render("index.ejs",{ content: JSON.stringify(response.data) })
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) }); 
  }
});

app.post("/put-secret", async (req, res) => {
  try {
    const searchId = req.body.id;
    const response = await axios.put(API_URL+"/secrets/"+searchId,req.body,config)
    res.render("index.ejs",{ content: JSON.stringify(response.data) })
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) }); 
  }
});

app.post("/patch-secret", async (req, res) => {
  
  try {
    const searchId = req.body.id;
    const response = await axios.patch(API_URL+"/secrets/"+searchId,req.body,config)
    res.render("index.ejs",{ content: JSON.stringify(response.data) })
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) }); 
  }
  
});

app.post("/delete-secret", async (req, res) => {
  try {
    const searchId = req.body.id;
    const response = await axios.delete(API_URL+"/secrets/"+searchId,config)
    res.render("index.ejs",{ content: JSON.stringify(response.data) })
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) }); 
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
