var express = require('express');
var router = express.Router();
const schema = require("../schema/schemaSignIn");
const readUsers = require('../meddleware/readUsers');
const addUser = require('../meddleware/addUser');
const checkEmail = require('../meddleware/checkEmail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", [readUsers,checkEmail,addUser] , (req,res)=>{
  res.redirect("/login")
})

module.exports = router;