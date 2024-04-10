const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://paytm:rYKsK2gQ7HeKUvn@paytm.kcveqf9.mongodb.net/paytm-b')

const userSchema = new Schema({
     username: {
        type: String,
    },
    password: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
})

const accountSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
};