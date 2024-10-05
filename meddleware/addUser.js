const schema = require("../schema/schemaSignIn");
const fs = require("fs")
const bcrypt = require("bcryptjs")

async function addUser(req,res,next){
    const {users} = res.locals
    try {
      const user = await schema.validateAsync(req.body);
      const hasPassword = bcrypt.hashSync(user.password,10)
      user.password = hasPassword
      user.id = String(Math.round(Math.random()*1000))
      delete user.rpassword
      users.push(user)
      fs.promises.writeFile("./db/users.json", JSON.stringify(users))
      next()
  }
  catch (err) { 
    res.json(err)
  }
  }

  module.exports = addUser

  // gexamvaspuryan1234