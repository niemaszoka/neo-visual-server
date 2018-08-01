const express = require('express');
const request = require('request');
const cors = require('cors');
const path = require('path');

const nasaApiKey = process.env.NASA_API_KEY;
const nasaApiDomain = `https://api.nasa.gov`;

const app = express();

getNeosRequestUrl = (startDate, stopDate) => {
  return `${nasaApiDomain}/neo/rest/v1/feed?start_date=${startDate}&end_date=${stopDate}&api_key=${nasaApiKey}`;
};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/nasa/neos/:startDate/:stopDate', cors(), (req, res) => {
  request(
    getNeosRequestUrl(req.params.startDate, req.params.stopDate),
    {json: true},
    (err, response, body) => {
      res.send(body);
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
