const { users } = require("../../models");

const userFetch = async (req, res) => {
   const filter = req.query.filter;
   // applying filter
   const regex = new RegExp(filter, 'i');
   const userFetched = await users.find({
      $or: [{ firstName: regex }, { lastName: regex }]
   });

   return res.json({
      success: true,
      users: userFetched.map(user => ({
         _id: user._id,
         email: user.email,
         firstName: user.firstName,
         lastName: user.lastName,
      })),
   })
}

module.exports = { userFetch }