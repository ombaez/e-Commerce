const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const staticPath = path.join(__dirname + "/../front/");

app.use(express.static(staticPath));
app.get("/*", function(req, res) {
  res.sendFile(staticPath, "index.html");
});

app.listen(port, function(req, res) {
  console.log("Xivis e-Commerce Server Running OK");
});
