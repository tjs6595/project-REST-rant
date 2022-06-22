// GET CRUD ACCESS TO DATABASE
const db = require('../models/index.js')

// CREATE SEED ARRAY OF PLACES
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'public/images/Restaurant 1.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'public/images/Restaurant 2.jpg',
    founded: 2020
}])

// BEHAVIOR IF CREATE IS SUCCESSFUL
.then(() => {
    console.log('Success!')
    process.exit()
})

// BEHAVIOR IF CREATE FAILS
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})

