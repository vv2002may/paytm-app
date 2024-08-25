const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
   },
   balance: {
      type: Number,
      required: true,
   }
})

const accounts = mongoose.model('accounts', accountSchema);

module.exports = accounts;