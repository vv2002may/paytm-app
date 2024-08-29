const zod = require('zod');

const signinZod = zod.object({
   email: zod.string().email(),
   password:zod.string().min(3)
})

module.exports = signinZod;