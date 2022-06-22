// REQUIRE MONGOOSE AND DOTENV
const mongoose = require('mongoose')
require('dotenv').config()

// CONNECT TO MONGOOSE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

// EXPORT MODELS
module.exports.Place = require('./places')




// // CREATING SHORTHAND FOR THE SCHEMA CONSTRUCTOR 
// const { Schema } = mongoose 

// // DEFINE THE BREAD SCHEMA
// const breadSchema = new Schema({
//   name: { type: String, required: true },
//   hasGluten: Boolean,
//   image: { type: String, default: 'http://placehold.it/500X500.png'}
// })

// // CREATE THE BREAD MODEL BASED OFF OF THE BREAD SCHEMA
// const Bread = mongoose.model('Bread', breadSchema)

// // EXPORT THE BREAD MODEL SO IT CAN BE USED THROUGHOUT THE PROJECT
// module.exports = Bread