const { users, signinZod } = require("../../models");
const { jwtSign } = require("../../services/jwtService");


const userSignin = async (req, res, next) => {
   try {
      const payload = signinZod.safeParse(req.body);
      if (payload.success) {
         const { email, password } = req.body;
         const user = await users.findOne({ email, password });
         // console.log('signin', user);
         if (!user) {
            return res.json({
               success: false,
               message: 'Invalid email or password!',
            })
         }
         else {
            return res.json({
               success: true,
               message: "Signed in successfully!",
               user:user,
               token: jwtSign({ userId: user._id })
            });
         }
      }
      else {
         return res.json({
            success: false,
            message: 'Invalid inputs!'
         })
      }
   }
   catch (err) {
      return res.json({
         success: false,
         message: 'Some error occured while signin!'
      })
   }
}

module.exports = { userSignin }