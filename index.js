const express = require("express");
const mysql = require("mysql");

const port = 3000;

const app = express();

app.use(express.static("public"));

app.listen(3000, function () {
  console.log("listening on 3000");
});

// 어떤 요청이 들어오든 다 index.html을 전송한다
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});
