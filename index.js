const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Movie = require("./Image/modelImage");

app.use(Movie);

app.listen(port, () => console.log(`Listening port on ${port}`));
