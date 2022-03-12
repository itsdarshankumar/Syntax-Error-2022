const express = require("express");
const app = express();
const con = require("../../database.js");

exports.stocksview = (req, res) => {
  //render stocks page
};

exports.buystocks = (req, res) => {
  const email = req.body.email_id;
  const buystock = req.body.stock;
  const price = req.body.price;
  const value = req.body.value;

  con.query(
    "INSERT INTO stocks (email_id, stock, price, status, value) VALUES (" +
      con.escape(email) +
      con.escape(buystock) +
      con.escape(price) +
      `BUY` +
      con.escape(value) +
      ")",
    function (err, result) {
      if (err) throw err;
      console.log("Stocks database updated: buy");
    }
  );
};

exports.sellstocks = (req, res) => {
  const email = req.body.email_id;
  const sellstock = req.body.stock;
  const price = req.body.price;
  const value = req.body.value;

  con.query(
    "INSERT INTO stocks (email_id, stock, price, status, value) VALUES (" +
      con.escape(email) +
      con.escape(sellstock) +
      con.escape(price) +
      `SELL` +
      con.escape(value) +
      ")",
    function (err, result) {
      if (err) throw err;
      console.log("Stocks database updated: sell");
    }
  );
};