const { accounts } = require("../../models")

const accountBalance = async (req, res, next) => {
   try {
      userId = req.headers.userId;
      const account = await accounts.findOne({ userId });
      // const user = await account.populate('userId');
      if (account) {
         return res.json({
            success: true,
            balance: account.balance,
         })
      }
      else {
         return res.json({
            success: false,
            message: 'User Does Not Have Account!',
         })
      }
   }
   catch (err) {
      return res.json({
         success: false,
         message: 'Error Occured While Fetching Your Balance!',
      })
   }
}

module.exports={accountBalance}