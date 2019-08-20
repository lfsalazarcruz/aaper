const express = require("express");
require("./lib/cron");

const app = express();

app.get("/scrape", async (req, res, next) => {});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server is up");
});
