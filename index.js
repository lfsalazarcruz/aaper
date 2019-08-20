const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const db = require("./lib/db");
require("./lib/cron");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan());

app.get("/data", async (req, res, next) => {
  // Get scrape data
  const scrapes = db.get("scrapes").value();
  // respond with JSON
  res.json(scrapes);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server is up");
});
