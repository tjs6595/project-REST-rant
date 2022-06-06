// Require needed modules.
require('dotenv').config();
const express = require('express');


// Initialize the app object.
const app = express();

// Create a homepage route.
app.get('/', (req, res) => {
    res.send('Hello world!')
});

// Wildcard route.
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

// Listen for connections.
app.listen(process.env.PORT);