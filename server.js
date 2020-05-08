const express = require("express");
const app = express();
const inshorts = require("inshorts").init();

// const techNews = [];

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  inshorts.getNews("technology", function (err, result) {
    if (!err) {
      res.render("index", { techNews: result });
    } else {
      console.log(err);
    }
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Application is running on ${process.env.PORT || 8000}`);
});
