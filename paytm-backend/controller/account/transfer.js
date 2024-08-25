const { default: mongoose } = require("mongoose");
const { accounts } = require("../../models");


const accountTransfer = async (req, res, next) => {
   try {
      const session = await mongoose.startSession();
      session.startTransaction();
      const { amount, to } = req.body;
      const account = await accounts.findOne({ userId: req.headers.userId });
      if (!account || account.balance < amount) {
         await session.abortTransaction();
         return res.status(400).json({
            success: false,
            message: 'Insufficient Balance!'
         })
      }
      else {
         const toAccount = await accounts.findOne({ userId: to }).session(session);
         if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
               success: false,
               message: 'Invalid Account!'
            })
         }
         else {
            // perform the transfer
            await accounts.updateOne({ userId: req.headers.userId }, { $inc: { balance: -amount } }).session(session);
            await accounts.findOne({ userId: to }, { $inc: { balance: amount } }).session(session);

            // commit the transaction
            await session.commitTransaction();
            return res.status(200).json({
               success: true,
               message: 'Transfer Successfull!'
            });
         }
      }
   }
   catch (err) {
      return res.json({
         success: false,
         message: 'Some error occured!'
      })
   }
}

module.exports = { accountTransfer }