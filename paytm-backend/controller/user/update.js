const { users, updateZod } = require("../../models")

const userUpdate = async (req, res, next) => {
   try {
      const payload = updateZod.safeParse(req.body);
      if (payload.success) {
         const userId = req.headers.userId;
         const { firstName, lastName, password } = req.body;
         await users.findOneAndUpdate({ _id: userId }, { firstName, lastName, password })
         return res.status(200).json({
            success: true,
            message: 'Details Updated!'
         })
      }
      else {
         return res.json({
            success: false,
            message:'Wrong Inputs!'
         })
      }
   }
   catch (err) {
      return res.json({
         success: false,
         message: 'Error Occured While Updating Your Details!'
      })
   }
}

module.exports = { userUpdate }