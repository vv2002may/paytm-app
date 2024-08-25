const { userSignup } = require("./signup");
const { userUpdate } = require("./update");
const {userFetch}=require('./fetch')


module.exports =  {
   userFetch,
   userSignup,
   userUpdate,
}