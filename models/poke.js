const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    name: String,
    description: String,
    type: String,
    photoUrl: String,
})

module.exports = mongoose.model("Poke", pokeSchema);