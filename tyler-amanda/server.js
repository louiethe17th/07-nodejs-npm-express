'use strict';

//TODO: Finish out the server code according to the instructions in the lab README

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.static('./public'));

// route for handling request to new.html
app.get('/new-article', (request, response) => {
  response.sendFile('new.html', { root: './public' });
});

// Middleware
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}` ));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.use((request, response, next) => {
  console.log('OH NOES a 404!!!!!!!');
  response.status(404).sendFile('404.html', { root: './public' });
});
