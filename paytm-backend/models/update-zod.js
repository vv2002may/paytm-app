const zod = require('zod');

const updateZod = zod.object({
   firstName: zod.string().optional(),
   lastName: zod.string().optional(),
   password: zod.string().optional(),
})

module.exports=updateZod