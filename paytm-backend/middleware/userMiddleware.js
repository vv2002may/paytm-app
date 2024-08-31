const { users } = require("../models");
const { jwtVerify } = require("../services/jwtService");

const userMiddleware = async (req, res, next) => {
   
   try {
      const tokenType = req.headers.token;
      const token = tokenType.split(' ')[1];
      const decoded = jwtVerify({ token });
      if (decoded.userId) {
         const user = await users.findOne({ _id: decoded.userId })
         if (user) {
            req.headers.userId = decoded.userId;
            next();
         }
         else {
            return res.json({
               success: false,
               message: 'User is not authorized!',
            })
         }
      }
   }
   catch (err) {
      return res.json({
         success: false,
         message: `Some error occured while authentication!`,
      })
   }

}

module.exports = { userMiddleware }