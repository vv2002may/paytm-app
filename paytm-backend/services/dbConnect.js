const mongoose = require('mongoose');
const { mongoUri } = require('../config.js/index')

const dbConnect = async ({ dbName }) => {
   try {
      mongoose.connect(mongoUri + dbName)
         .then(() => {
            console.log('DB is Connected!');
         })
         .catch(err => {
            console.log('error!');
         })

   }
   catch (err) {
      return err;
   }
}

module.exports = { dbConnect };