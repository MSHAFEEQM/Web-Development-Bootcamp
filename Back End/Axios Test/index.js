import axios from "axios";
import  express  from "express";

const app =express()
const port = 5000;


app.get('/', async (req,res)=> {

    try {
      const response = await axios.get('https://randomuser.me/api/');
      res.render("index.ejs", {user : response.data.results[0]})
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }
)

app.get('/random', async (req, res) => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const result = response.data;
      console.log(result)
      res.send(result)
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.send(error.message
      );
    }
  });

app.get('/card',(req,res)=>{
    res.render("card.ejs")
})

app.listen(port,()=>{
    console.log("Server listenign 3000")
})

