import bodyParser from 'body-parser';
import express from 'express';
import pg from 'pg';

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "101010",
    port: 5432,
});


const app = new express();
const port = 3000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.post("/upload", async (req, ress) => {

    console.log(req.body.country);
    console.log(req.body.rice);
    console.log(req.body.wheat);
    let country = req.body.country;
    let rice = parseFloat(req.body.rice);
    let wheat = parseFloat(req.body.wheat);
    await db.connect();
    try {

        db.query("INSERT INTO world_food (country, rice, wheat) VALUES ('"+country+"',"+rice+","+wheat+")",(err,res)=>{
            if(err){
                console.log("Query Execution Failed")
                console.log(err)
                ress.json("Query Execution Failed")
            }else{
                console.log("Data Uploaded Successfullly");
                ress.json("Data Uploaded Successfullly")
                db.end();
            }
        })

    } catch (error) {
        console.log(error)
    }
  

    

})

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});


