import axios from "axios";
import  express  from "express";

const app =express()
const port = 5000;


app.get('/',(req,res)=> {

  axios.get('https://randomuser.me/api/').then((resp)=>{
    console.log(resp.data);
    res.render("index.ejs", {user : resp.data.results[0]})
  }).catch((error)=>{
    console.log();
  })

  }
)
app.get('/a',(req,res)=> {

  axios.get('https://random-data-api.com/api/v2/users?size=2').then((resp)=>{
    console.log(resp.data);
    res.send(resp.data)
  }).catch((error)=>{
    console.log();
  })

  }
)

app.get('/random', async (req, res) => {
    try {
      const response = await axios.get('https://random-data-api.com/api/v2/users?size=2');
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

