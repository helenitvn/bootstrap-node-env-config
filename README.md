# Bootstraping Node.js config for dev/qa/prod environment

## Define config

```javascript
/**
  * config/config.global.js
  */
  
var config = module.exports = {};

//common
config.version = "1.1.0";
config.env = "global";
config.hostname = "example.com";

//api
config.api = {};
config.api.uri = "https://api.example.com";
```

```javascript
/**
  * config/config.development.js
  */
  
var config = require("./config.global");

//common
config.env = "development";
config.hostname = "dev.example.com";

//api
config.api.uri = "https://api-dev.example.com";

module.exports = config;
```

```javascript
/**
  * config/index.js
  */
  
var env = process.env.NODE_ENV || 'development',
    cfg = require('./config.' + env);

module.exports = cfg;
```

## Use config

```javascript
/**
  * routes/index.js
  */
  
var express = require('express');
var router = express.Router();
var cfg = require('../config/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cfg: cfg, title: 'Express' });
});

module.exports = router;
```

```javascript
/**
  * views/index.ejs
  */
  
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
  <script>
    var ENV_CONFIG = <%- JSON.stringify(cfg) %>;
    console.info('ENV_CONFIG: ', ENV_CONFIG)
  </script>
</head>
<body>
</body>
</html>
```
