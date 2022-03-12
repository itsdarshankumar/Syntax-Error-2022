const express = require("express");
const app = express();
const con = require("../../database.js");

exports.friendsview = (req, res) => {
  //render friends page
};

exports.search = (req, res, next) => {
  const email = req.body.email;

  con.query(`SELECT * FROM user WHERE email_id="${email}"`, (err, rows) => {
    if (!err) {
      if (rows[0] === undefined) {
        console.log("No user found");
      } else {
        console.log(rows[0]);
      }
    } else throw err;
  });
};
