const express = require('express');
const router = express.Router();
const request = require('request');

// GET route to api/avatars
router.get('/', function(req, res) {
  var options =
  {
    url: 'https://api.github.com/repositories?since=1000'
  };

  function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
      var dataObj = JSON.parse(body);
      console.log(dataObj);
    }
  }

  request(options, callback);
});

module.exports = router;
