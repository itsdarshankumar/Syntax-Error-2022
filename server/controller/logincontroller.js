const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const db = require("../../database.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

exports.loginview = (req, res) => {
  res.write("hello");
};

exports.login = (req, res) => {
  console.log("Login Attempted");
  console.log(req.body);
  const { requsername, reqpassword } = req.body;
  console.log(requsername);
  db.query(
    "SELECT * FROM user WHERE username=" + db.escape(requsername),
    (err, rows) => {
      if (!err) {
        if (rows[0] === undefined) {
          res.send("User doesn't exist");
        } else {
          const verified = bcrypt.compareSync(reqpassword, rows[0]["password"]);
          if (verified) {
            console.log("login succefull");
            req.session.userinfo = rows[0].username; //session

            res.redirect("/dashboard");
          } else {
            res.send("Incorrect Enrollment number or password");
          }
        }
      } else {
        console.log(err);
      }
    }
  );
};

exports.signup = (req, res) => {
  console.log("sign-up nearabout finished");
  console.log(req.body);
  const { username, email_id, password, password_repeat } = req.body;
  //confirming both password are same
  if (password === password_repeat) {
    //Implementing hashing and storing data
    bcrypt.hash(password, 10, (err, hash) => {
      if (!err) {
        db.query(
          "SELECT * FROM user WHERE username=" + db.escape(username),
          (err, rows) => {
            if (!err) {
              console.log(rows);
              if (rows[0] === undefined) {
                console.log("unique user");
                db.query(
                  "INSERT INTO user (username,email_id,password) VALUES (" +
                    db.escape(username) +
                    "," +
                    db.escape(email_id) +
                    "," +
                    db.escape(hash) +
                    ")",
                  (err, row) => {
                    if (!err) {
                      console.log("yo!! welcome to the fam");
                      res.redirect("/");
                    } else {
                      console.log(err);
                    }
                  }
                );
              } else {
                res.send("User Already Exits");
              }
            } else console.log(err);
          }
        );
      } else {
        console.log(err);
      }
    });
  } else {
    res.send("Both passwords not same");
  }
};

exports.singupview = (req, res) => {
  res.write("welcome");
};
