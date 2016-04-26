var config = require("./config.global");

//common
config.env = "development";
config.hostname = "dev.example.com";

//api
config.api.uri = "https://api-dev.example.com";

module.exports = config;

