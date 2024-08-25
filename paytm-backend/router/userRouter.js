const express = require('express');
const { userUpdate, userSignup, userFetch } = require('../controller/user');
const { userMiddleware } = require('../middleware');


const userRouter = express.Router();

userRouter.get('/bulk',userMiddleware, userFetch)
userRouter.put('/', userMiddleware, userUpdate)
userRouter.post('/signup',userSignup )


module.exports = { userRouter };