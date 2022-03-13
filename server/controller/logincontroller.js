const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const db = require("../../database.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

exports.loginview = (req, res) => {
  res.sendfile("login.html");
};

exports.signinview = (req, res) => {
  res.sendfile("signin.html");
};

exports.login = (req, res) => {
  console.log("Login Attempted");
  console.log(req.body);
  const { reqemail, reqpassword } = req.body;
  console.log(reqemail);
  db.query(
    "SELECT * FROM user WHERE email_id=" + db.escape(reqemail),
    (err, rows) => {
      if (!err) {
        if (rows[0] === undefined) {
          res.send("User doesn't exist");
        } else {
          console.log(rows[0]["password"]);
          const verified = bcrypt.compareSync(reqpassword, rows[0]["password"]);
          if (verified) {
            console.log("login successful");
            req.session.userinfo = rows[0].email_id; //session

            res.json({ status: true });
          } else {
            res.json({ status: false });
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
          "SELECT * FROM user WHERE email_id=" + db.escape(email_id),
          (err, rows) => {
            if (!err) {
              //console.log(rows);
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
                      console.log("User added");
                      res.json({ status: true });
                    } else {
                      console.log(err);
                    }
                  }
                );
              } else {
                res.json({ status: false });
              }
            } else throw err;
          }
        );
      } else {
        console.log(err);
      }
    });
  } else {
    res.json({ status: false });
  }
};

exports.singupview = (req, res) => {
  res.send("hello");
};

//logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/dashboard");
    }
    res.clearCookie(process.env.SESS_NAME);
    res.redirect("/");
  });
};
