const cron = require("node-cron");
const runCron = require("./scraper");

cron.schedule("5 * * * *", function() {
  console.log("Running cron!");
  runCron();
});
