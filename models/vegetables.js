const mongoose = require('mongoose')

// Make a Schema -- tells us what we cannot do
const vegetableSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
})

// Make a Model From the Schema -- let us update documents in the collection 

const Vegetable = mongoose.model('Vegetable', vegetableSchema) // we make Vegetable collection inside the Database 

// Export the Model For Use in the App 

module.exports = Vegetable


