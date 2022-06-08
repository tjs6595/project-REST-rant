// Require needed modules.
require('dotenv').config();
const express = require('express');
//const error404 = require('./error404');

// Initialize the app object.
const app = express();

// Define the view engine.
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Direct the app to the "Places" controller.
app.use('/places', require('./controllers/places'));

// Create a homepage route.
app.get('/', (req, res) => {
    res.render('home')
});

// Wildcard route.
app.get('*', (req, res) => {
    res.status(404).render('error404');
});

// Listen for connections.
app.listen(process.env.PORT);