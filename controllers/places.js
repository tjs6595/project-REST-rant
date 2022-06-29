// REQUIRE NEEDED MODULES.
const router = require('express').Router()
const db = require('../models')

// LOAD INDEX PAGE.
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

// LOAD NEW PLACE PAGE
router.get('/new', (req, res) => {
  res.render('places/new')
})

// LOAD PLACE SHOW PAGE
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// UPDATE THE PLACE AND REDIRECT TO THE SHOW PAGE
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// DELETE PLACE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// LOAD THE PLACES EDIT PAGE
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', {place})
  })
  .catch(err => {
    res.render('error404')
  })
})

// POST A RANT
router.post('/:id/comment', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
        console.log(req.body)
      })
    })
    .catch(err => {
      res.render('error404')
    })
  })
  .catch(err => {
    res.render('error404')
  })

  if (req.body.rant){
    req.body.rant = true
  }
  else {req.body.rant = false
  }
  res.send('GET /places/:id/comment stub')
})

// LOAD THE PLACES COMMENT PAGE
router.get('/:id/comment', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render(`places/comment`, {place})
    })
  .catch(err => {
    res.render('error404')
  })
})

// DELETE A RANT
router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})


module.exports = router





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
// // PUT ROUTE TO ADD NEW PLACE.
// router.put('/:id', (req, res) => {
//   res.send('PUT /places/:id stub')
// })