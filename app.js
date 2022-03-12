const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;
const session = require("express-session");
const cookie = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookie());

const database = require("./database.js");
const authRouter = require("./server/router/authRouter.js");

/*app.use(
  session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, //1 day
    },
  })
);*/

app.get("/", (req, res) => {
  res.send('<a href="/google">OAuth with Google</a>');
});

app.use("/", authRouter);

app.get("/dashboard", (req, res) => {
  res.send("dashboard");
  //res.send('<a href="/logout">Log out</a>');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
