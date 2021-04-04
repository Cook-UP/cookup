const mongoose = require('mongoose');

const MONGODB_URL = process.env.DATABASE_ACCESS;

//Initialize connection to MongoDB
const init = function() {
    mongoose.connect(MONGODB_URL);
};

init();


const newUser = function(data) {
    const uID = data.uID;
    const firstName = data.firstName;
    const lastName = data.lastName;

    const user = new User({
        uID: uID
    });
};

const newKitchen = function(data) {

    const kitchen = new Kitchen({
        
    });
}