const mongoose = require('mongoose');

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required!'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required!']
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Last name is required!'],
      validate:[validateEmail, 'Please fill a valid email address']
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Password is required!'],
    },
    birthDate: {
      type: String,
      required: [true, 'Birth date is required!']
    },
    gender: {
      type: String,
      required: [true, 'Gender is required!']
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    minimize: false
  }
);

const UserAccount = mongoose.model('users', Schema);

module.exports = UserAccount;
