const mongoose = require("mongoose");
const User = require("./userModel");

const kitchenSchema = new mongoose.Schema({
    kID: {              //Unique identifier for users
        type: String,
        required: true   
    },
    name: {
        type: String,
        required: true   
    },
    desc: {
        type: String,
        required: true
    },
    owner: {
        type: User.schema,
        required: true
    }
});

const Kitchen = mongoose.model('Kitchen', kitchenSchema);

module.exports = Kitchen;