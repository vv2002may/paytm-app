const zod = require('zod');

const signupZod = zod.object({
   firstName: zod.string().min(1),
   lastName: zod.string(),
   email: zod.string().email(),
   password:zod.string().min(3)
})


module.exports=signupZod