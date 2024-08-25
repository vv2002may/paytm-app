const express = require('express');
const { userMiddleware } = require('../middleware/userMiddleware');
const { accountBalance, accountTransfer } = require('../controller/account');


const accountRouter = express.Router()

accountRouter.get('/balance', userMiddleware, accountBalance);
accountRouter.put('/transfer',userMiddleware,accountTransfer)


module.exports={accountRouter}