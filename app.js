const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 4000;
const session = require("express-session");
const cookie = require("cookie-parser");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use(cookie());

app.use(
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
);

const login = require("./server/router/login.js");
const dashboard = require("./server/router/dashboard.js");
const database = require("./database.js");
const authRouter = require("./server/router/authRouter.js");
const friendsRouter = require("./server/router/friendsRouter");
const wishlistRouter = require("./server/router/wishlistRouter");
const statusRouter = require("./server/router/statusRouter");
app.use("/", login);
app.use("/oauth", authRouter);
app.use("/dashboard", dashboard);
app.use("/friends", friendsRouter);
app.use("/wishlist", wishlistRouter);
app.use("/transaction", statusRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
