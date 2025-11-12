import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

let weekDay = false;

if ((day === 1) | 2 | 3 | 4 | 5) {
  weekDay = true;
} else {
  weekDay = false;
}

app.get("/", (req, res) => {
  if (weekDay) {
    res.render("index.ejs", { dayType: "a weekday", advice: "work hard" });
  } else {
    res.render("index.ejs", { dayType: "the weekend", advice: "have fun" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
