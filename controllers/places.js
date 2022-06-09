// Require needed modules.
const router = require('express').Router()

// Get /places.
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }];     
    res.render('places/index.jsx', {places})
});

// Get /create.
router.get('/', (req, res) => {
    res.render('places/create.jsx')
});

// Get /edit.
router.get('/', (req, res) => {
    res.render('places/edit.jsx')
});

// Get /show.
router.get('/', (req, res) => {
    res.render('places/show.jsx')
});


module.exports = router;