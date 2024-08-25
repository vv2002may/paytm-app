const dotenv=require('dotenv')
dotenv.config();

const x = {
   mongoUri,
   PORT,
   JWT_SECRET
} = process.env;

module.exports = x;