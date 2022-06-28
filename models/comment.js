// REQUIRE MONGOOSE
const mongoose = require('mongoose')

// // CONNECT TO MONGOOSE

// CREATE COMMENT SCHEMA
let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})
  
// EXPORT MODELS
module.exports = mongoose.model('Comment', commentSchema)