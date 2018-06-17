//Mongoose Model Class Go Here

const mongoose = require('mongoose')
const { Schema } = mongoose //Schema = mongoose.Schema


//mongoose needs to know ahead of time what properties each collection has

const userSchema = new Schema({
    googleID: String,
    name: String
});

mongoose.model('users', userSchema) //create a new collection in mongoDB called 'users'