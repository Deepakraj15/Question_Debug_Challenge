const express = require('express');
const path = require('path');
const app = express();

// Set the directory where your HTML files are located
app.use(express.static('source/Templates'));
app.use(express.static('source/styles'))
app.get('/', function (req, res) {
  // Render the HTML file directly
  res.sendFile('index.html', { root: 'source\Templates' });
});

app.listen(3000, () => console.log(`Listening on port ${3000}`));
