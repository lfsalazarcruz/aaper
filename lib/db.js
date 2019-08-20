const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// Setup the db
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
  scrapes: []
}).write();

module.exports = db;
