const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,

        // unique는 db에서 유일해야한다.
        unique: true,
        // "ABC " , "     ABC  ",
        // "ABC"
        // trim은 문자열 앞뒤 공백을 제거한다.
        trim: true,
        minlength: 2
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 16
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;