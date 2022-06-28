// GET CRUD ACCESS TO DATABASE
const db = require('../models')

// FUNCTION FOR SEEDING COMMENTS
async function seed(){
    // GET THE PLACE, IN THIS CASE H-THAI-ML
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    // CREATE A FAKE SAMPLE COMMENT
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly Recommended!'
    })

    // ADD THAT COMMENT TO TEH PLACE'S COMMENT ARRAY
    place.comments.push(comment.id)

    // SAVE THE PLACE NOW THAT IT HAS A COMMENT
    await place.save()

    // EXIT THE PROGRAM
    process.exit()
}

seed();

// // CREATE SEED ARRAY OF PLACES
// db.Place.create([{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: 'public/images/Restaurant 1.jpg',
//     founded: 1989
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: 'public/images/Restaurant 2.jpg',
//     founded: 2020
// }])

// // BEHAVIOR IF CREATE IS SUCCESSFUL
// .then(() => {
//     console.log('Success!')
//     process.exit()
// })

// // BEHAVIOR IF CREATE FAILS
// .catch(err => {
//     console.log('Failure!', err)
//     process.exit()
// })

