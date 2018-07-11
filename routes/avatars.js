const express = require('express');
const router = express.Router();
const fetch = require('isomorphic-fetch');

require('es6-promise').polyfill();

// GET route to avatars
// send request to github API, start with repo 1000
router.get('/', function(req, res) {
  fetch('https://api.github.com/repositories?since=1000')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(repos) {
        res.send(repos);
        // console.log(repos);
    });
});

module.exports = router;
