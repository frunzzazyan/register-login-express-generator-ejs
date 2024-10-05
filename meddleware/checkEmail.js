function checkEmail(req,res,next){
    const {users} = res.locals
    const body = req.body
    console.log(body)
    if(users){
        let includesEmail = users.find(elem=>elem.email === body.email.trim())
        if(includesEmail){
            res.status(422).json({"msg" : "The email address exists"})
        }else{
            next()
        }
    }
}

module.exports = checkEmail