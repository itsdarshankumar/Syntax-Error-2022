const express = require("express");
const app = express();
const db = require("../../database.js");
const finnhub = require("finnhub");
const res = require("express/lib/response");
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const apikey = process.env.API_KEY;
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = apikey; // Replace this
const finnhubClient = new finnhub.DefaultApi();

exports.search = (req, res) => {
  const { search } = req.body;
  console.log(search);
  finnhubClient.symbolSearch(`${search}`, (error, data, response) => {
    console.log(data);
  });
};

exports.stock = (req, res) => {
  const { company } = req.body;
  let info = {};

  function companyprofile() {
    finnhubClient.companyProfile2(
      { symbol: `${company}` },
      (error, data, response) => {
        info["profile"] = data;
        console.log("companyprofile");
        companyquote();
      }
    );
  }
  function companyquote() {
    finnhubClient.quote(`${company}`, (error, data, response) => {
      info["quote"] = data;
      companynews();
    });
  }

  function companynews() {
    finnhubClient.companyNews(
      `${company}`,
      "2022-03-11",
      "2022-03-12",
      (error, data, response) => {
        info["news"] = data;
        console.log("hi");
        companyearning();
      }
    );
  }

  function companyearning() {
    finnhubClient.companyEarnings(
      `${company}`,
      { limit: 5 },
      (error, data, response) => {
        info["earning"] = data;
        console.log(info);
        res.json(info);
      }
    );
  }

  companyprofile();
};

exports.mystocks = (req,res) => {
  console.log(req.body);
  const { email_id } = req.body;
  db.query(
    "SELECT * FROM stocks WHERE (email_id=" + db.escape(email_id) + ")"
  ),
    (err, rows) => {
      if (rows[0] === undefined) {
        res.JSON({ status: false });
      } else {
        res.send(rows);
      }
    };
};
