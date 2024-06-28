import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "secrets",
  password : "101010",
  port : 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {

    const email = req.body.username;
    const password = req.body.password;

    try {
      
          const check  = await db.query("SELECT * FROM users WHERE email = $1",[email])
          if(check.rows.length > 0){
            res.send("Email is already exist..!, Try Login..")
          }else{
            const result  = await db.query("INSERT INTO users (email,password) values ($1,$2)",[email,password])
            console.log(result);
            res.render("secrets.ejs")
          }

    } catch (error) {
      console.log(error);
    }

});

app.post("/login", async (req, res) => {

  const email = req.body.username;
  const password = req.body.password;

  try {
    
    const result = await db.query("SELECT * FROM users WHERE email = $1 ",[email]);
    if(result.rows.length == 0){
      res.send("User Does not Exist... Please Register First..!");
    }else{
      const storedPassword = result.rows[0].password
      if(storedPassword == password){
        res.render("secrets.ejs")
      }else{
        res.send("Incorrect Password...!")
      }
    }      
  } catch (error) {
    console.log(error)
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
