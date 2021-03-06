
// REQUIRE MONGOOSE 
const mongoose = require('mongoose')

// DEFINE THE PLACE SCHEMA
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: `http://placekitten.com/350/350`},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

// DEFINE THE showEstablished INSTANCE METHOD
placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// EXPORT THE PLACE MODEL SO IT CAN BE USED THROUGHOUT THE PROJECT
module.exports = mongoose.model('Place', placeSchema)
















// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/Restaurant 1.jpg',
//     author:'https://unsplash.com/@tamarushphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
//     link:'https://unsplash.com/s/photos/free-image-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/Restaurant 2.jpg',
//     author:'https://unsplash.com/@tamarushphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
//     link:'https://unsplash.com/s/photos/free-image-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
// }]
