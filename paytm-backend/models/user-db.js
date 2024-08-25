const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   firstName: {
      type: String,
      required: true,
      trim: true,
   },
   lastName: {
      type: String,
      required: true,
      trim:true,
   },
   email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique:true,
   },
   password: {
      type: String,
      required: true,
      minLength:true,
   }
})

const users = mongoose.model('users', userSchema);

module.exports = users;