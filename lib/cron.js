const cron = require("node-cron");
const runCron = require("./scraper");

cron.schedule("25 * * * *", function() {
  console.log("Running cron!");
  runCron();
});
