import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "world",
  password : "101010",
  port : "5432"
});

db.connect();
let countryNames = []

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  const result2 = await db.query("SELECT * FROM countries");
  // console.log(result2.rows);
  countryNames = [];
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
    result2.rows.forEach((cName)=>{
      if(country.country_code == cName.country_code){
        countryNames.push(cName.country_name);
      }
    })
  });
  console.log(countryNames)
  return countries;
}

app.get("/", async (req, res) => {
  let countries = await checkVisisted();
  res.render("index.ejs", { countries : countries , total : countries.length , countryNames : countryNames} ) 
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); 
});
