const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const db = require("../../database.js");
const finnhub = require("finnhub");
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
  let info = [];

  finnhubClient.companyProfile2(
    { symbol: `${company}` },
    (error, data, response) => {
      info.push(data);
    }
  );
  //check date
  finnhubClient.companyNews(
    `${company}`,
    "2022-03-11",
    "2022-03-12",
    (error, data, response) => {
      companynews = data;
      info.push(data);
      console.log(info);
    }
  );

  finnhubClient.quote(`${company}`, (error, data, response) => {
    info.push(data);
    console.log(data);
  });

  console.log(info);
  res.json(info);
};
