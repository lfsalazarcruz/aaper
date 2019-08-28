const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server is up");
});
