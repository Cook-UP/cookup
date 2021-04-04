const userSchema = new mongoose.Schema({
    uID: {              //Unique identifier for users
        type: String,
        required: true   
    },
    firstName: {
        type: String,
        required: true   
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }           
});

const User = mongoose.model('User', userSchema);

module.exports = User;