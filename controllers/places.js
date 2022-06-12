// Require needed modules.
const router = require('express').Router()

// Get /new.
router.get('/new', (req, res) => {
    res.render('places/new')
});

// Post new Place Entry.
router.post('/', (req, res) => {
    //res.render('places')
    //res.redirect('/places')
    res.send('/places stub');
});

// Get /places.
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Restaurant 1.jpg',
        author:'https://unsplash.com/@tamarushphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        link:'https://unsplash.com/s/photos/free-image-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Restaurant 2.jpg',
        author:'https://unsplash.com/@tamarushphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        link:'https://unsplash.com/s/photos/free-image-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
      }];     
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