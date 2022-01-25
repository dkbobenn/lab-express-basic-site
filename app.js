// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// get homepage
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// get about page
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Server
app.listen(3000, () => console.log('listening on port 3000!'));
