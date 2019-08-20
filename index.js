const express = require("express");
require("./lib/cron");

const app = express();

app.get("/scrape", async (req, res, next) => {});

app.listen(2020, () => {
  console.log("Server running on PORT 2020");
});
