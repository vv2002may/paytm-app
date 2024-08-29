const { signupZod, accounts } = require('../../models/index')
const { users } = require('../../models/index');
const { jwtSign } = require('../../services/jwtService');

const userSignup = async (req, res) => {
   try {
      const valid = signupZod.safeParse(req.body);

      if (valid.success) {

         const user = await users.findOne({ email: req.body.email });

         if (!user) {
            const user = new users(req.body);
            await user.save();

            const account = new accounts({
               userId: user,
               balance: (1 + Math.random() * 10000).toFixed(2),
            })
            await account.save();
            return res.json({
               success: true,
               message: "Account Created!",
               user:user,
               token: jwtSign({ userId: user._id })
            })
         }
         else {
            return res.json({
               success: false,
               message: 'User already registered with this email!',
               // token: jwtSign({ userId: user._id })
            })
         }
      }
      else {
         return res.json({
            success: false,
            message: 'Wrong Inputs!'
         })
      }
   }
   catch (err) {
      return res.json({
         success: false,
         message: err
      })
   }
}

module.exports = { userSignup }