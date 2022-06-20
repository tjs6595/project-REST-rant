// REQUIRE NEEDED MODULES.
const router = require('express').Router()
const db = require('../models')

// GET /new.
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// POST NEW PLACE ENTRY INTO PLACES DATABASE
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// GET /places.
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /show.
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// PUT ROUTE TO ADD NEW PLACE.
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// GET /delete.
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// GET /edit.
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router



module.exports = router;












// // Get /new.
// router.get('/new', (req, res) => {
//   res.render('places/new')
// });

// // Post new Place Entry.
// router.post('/', (req, res) => {
//   if (!req.body.pic){
//     //Default image if one is not provided.
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city){
//     //Default city if one is not provided.
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state){
//     //Default state if one is not provided.
//     req.body.state = 'USA'
//   }
//   places.push(req.body);
//   res.redirect('/places');
// });

// // Get /places.
// router.get('/', (req, res) => {   
//   res.render('places/index', {places})
// });

// // Get /show.
// router.get('/:id', (req, res) => {
// let id=Number(req.params.id)
// if(isNaN(id)){
//   res.render('error404')
// }
// else if(!places[id]){
//   res.render('error404')
// }
// else{
//   res.render('places/show.jsx', {place: places[id], id})
// }
// });

// // Get /edit.
// router.get('/:id/edit', (req, res) => {
// let id = Number(req.params.id)
// if (isNaN(id)) {
//     res.render('error404')
// }
// else if (!places[id]) {
//     res.render('error404')
// }
// else {
//   res.render('places/edit', {place: places[id], id:id})
// }
// })

// // Get /delete.
// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)){
//     res.render('error404')
//   }
//   else if (!places[id]){
//     res.render('error404')
//   }
//   else{
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// });

// // PUT route.
// router.put('/:id', (req, res) => {
// let id = Number(req.params.id)
// if (isNaN(id)) {
//   res.render('error404')
// }
// else if (!places[id]) {
//   res.render('error404')
// }
// else {
//   // Dig into req.body and make sure data is valid
//   if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//       req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//       req.body.state = 'USA'
//   }

//   // Save the new data into places[id]
//   places[id] = req.body
//   res.redirect(`/places/${id}`)
// }
// })