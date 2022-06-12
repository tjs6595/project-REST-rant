// Require needed modules.
const router = require('express').Router()
const places = require('../models/places.js')

// Get /new.
router.get('/new', (req, res) => {
    res.render('places/new')
});

// Post new Place Entry.
router.post('/', (req, res) => {
    if (!req.body.pic){
      //Default image if one is not provided.
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city){
      //Default city if one is not provided.
      req.body.city = 'Anytown'
    }
    if (!req.body.state){
      //Default state if one is not provided.
      req.body.state = 'USA'
    }
    places.push(req.body);
    res.redirect('/places');
});

// Get /places.
router.get('/', (req, res) => {   
    res.render('places/index', {places})
});



// // Get /edit.
// router.get('/', (req, res) => {
//     res.render('places/edit.jsx')
// });

// // Get /show.
// router.get('/', (req, res) => {
//     res.render('places/show.jsx')
// });


module.exports = router;