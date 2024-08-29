const { userSignup } = require("./signup");
const { userUpdate } = require("./update");
const {userFetch}=require('./fetch');
const { userSignin } = require("./signin");


module.exports =  {
   userFetch,
   userSignup,
   userUpdate,
   userSignin
}