var express = require('express');
var router = express.Router();
const readUsers = require('../meddleware/readUsers');
const bcrypt = require("bcryptjs")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("../views/login.ejs");
});

router.post("/", [readUsers], (req,res)=>{
  const {email, password} = req.body
  const {users} = res.locals
  const user = users.find(elem=>elem.email === email.trim())
  if(user){
    const validationPassword = bcrypt.compareSync(password.trim(), user.password)
    if(validationPassword){
      res.redirect("/home")
    }else{
      res.json({"msg" : "invalid password"})
    }
  }
})

module.exports = router;
