const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config.js/index')


const jwtSign = ({userId}) => {
   const token = jwt.sign({ userId }, JWT_SECRET);
   return 'Bearer ' + token;
}

const jwtVerify = ({ token }) => {
   const decoded = jwt.verify(token, JWT_SECRET);
   return decoded;
}

module.exports={jwtSign,jwtVerify}