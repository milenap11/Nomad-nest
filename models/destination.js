// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review.js')

// Create a schema to define the properties of the pets collection
const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    averageCost: { type: String, required: true },
    visa: { type: String, required: true }, 
    isFeatured: { type: Boolean, default: false },
    // the reviews array can only accept objects that match the criteria specified
    // in the reviewSchema. In other words, the reviews array can only accept reviews
    reviews: [reviewSchema]

});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Destination', destinationSchema);
