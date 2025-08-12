// api/index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up your middleware
app.use(bodyParser.json());

// Import your API logic
const chatRouter = require('./chat');
app.use('/chat', chatRouter);

// The key step: Export the Express app
// Vercel will use this as your Serverless Function handler
module.exports = app;

