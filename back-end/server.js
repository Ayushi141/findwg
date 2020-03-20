// For node.js
const express = require('express');
const path = require('path');
const port = 8080;

const app = express();
app.use(require('cors')());
app.use(require('body-parser').json());

// Load front-end for localhost:8080
app.use(express.static(path.join(path.dirname(__dirname), '\\front-end')));

// Limit json file size
app.use(express.json({limit: '1mb'}));

// Get city name and start web-scraping
app.post('/city', (req, rep) => {
    console.log('Got a request!', req.body);
    getAdvertLinks(req.body)
});

var listener = app.listen(port, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});


// For web-scraping
const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.wg-gesucht.de/';

function getAdvertLinks(cityName) {
    axios.get(url)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
}