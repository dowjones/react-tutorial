import express from 'express';
import morgan from 'morgan';
import React from 'react';
import devMiddleware from './dev-middleware';
import { renderToString } from 'react-dom/server';
import htmlPage from '../client/template.js';
import articles from './articles.js';

let css = '';
const app = express();
const PORT = 3000;

devMiddleware(app);
app.use('/assets', express.static('dist'));

//logger
app.use(morgan('dev'));

//Routes
app.get('/', function(req, res) {
  const initialPage = htmlPage();
  res.send(initialPage);
});

//articles API route
app.get('/api/articles', function(req, res) {
  res.json(articles);
});

//another API route
//example of getting request parameters
app.get('/api/:something', function(req, res) {
  res.json({
    foo: req.params.something
  });
});

//start the server!
app.listen(PORT, () => console.log(`Express Server listening on ${PORT}`));
