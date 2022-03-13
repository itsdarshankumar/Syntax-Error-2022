const express = require("express");
const app = express();
const con = require("../../database.js");

exports.addWish = (req, res) => {
  const wishstock = req.body.stock;
  console.log(wishstock);

  con.query(
    `SELECT * FROM wishlist WHERE stock="${wishstock}"`,
    (err, rows) => {
      if (!err) {
        if (rows[0] === undefined) {
          con.query(
            "INSERT INTO wishlist (stock) VALUES (" +
              con.escape(wishstock) +
              ")",
            function (err, result) {
              if (err) throw err;
              console.log("Wishlist database updated");
            }
          );
        } else {
          console.log(rows[0]);
        }
      } else throw err;
    }
  );
};

exports.deleteWish = (req, res) => {
  const delStock = req.body.stock;
  const delEmail = req.body.email_id;

  con.query(
    `DELETE FROM wishlist WHERE (stock=" ${delStock} "AND email_id= "${delEmail} ")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Deleted from wishlist");
    }
  );
};

exports.viewWish = (req, res) => {
  var sql = "SELECT stock FROM wishlist";
};