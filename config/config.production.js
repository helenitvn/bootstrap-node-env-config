var config = require("./config.global");

//common
config.env = "production";
config.hostname = "prod.example.com";

//api
config.api.uri = "https://api-prod.example.com";

module.exports = config;

