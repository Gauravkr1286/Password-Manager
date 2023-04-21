const express = require("express");
const app = express();
const mysql = reqire("mysql");

const db = mysql.createconnection({
  user: "root",
  host: "localhost",
  password: "password",
  daabase: "PasswordManager",
});
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Hello ji");
});
app.listen(PORT, () => {
  console.log("Server is running");
});
