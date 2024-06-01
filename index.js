const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/profile", (req, res) => {
  res.send("profile kul chuki ha ");
});
app.get("/profile/:username", (req, res) => {
  res.send(`Wellcome ${req.params.username}`);

 });

app.listen(3000);
