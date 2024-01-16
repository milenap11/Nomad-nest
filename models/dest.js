// Require the Mongoose package
const mongoose = require('mongoose');

// Create a schema to define the properties of the pets collection
const destSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    averageCost: { type: String, required: true },
    visa: { type: String, required: true }, 
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Dest', destSchema);
