const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const Image = require("./Image/routerImage");

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();

const cors = require("cors");
const corsMiddleware = cors();

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(Image);

app.listen(port, () => console.log(`Listening port on ${port}`));
