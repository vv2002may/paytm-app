const express = require('express');
const { userUpdate, userSignup, userFetch, userSignin } = require('../controller/user');
const { userMiddleware } = require('../middleware');


const userRouter = express.Router();

userRouter.get('/',userMiddleware, userFetch)
userRouter.put('/update', userMiddleware, userUpdate)
userRouter.post('/signup',userSignup )
userRouter.post('/signin',userSignin)

module.exports = { userRouter };