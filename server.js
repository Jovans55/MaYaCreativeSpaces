const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

app.get("/process", (req, res) => {
  res.render("process");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
