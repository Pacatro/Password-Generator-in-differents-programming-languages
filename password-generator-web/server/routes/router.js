const { Router } = require('express')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })
const User = require('../classes/user')

const router = Router()

let gen_pass
let username
let private_key
let reminder

router.post('/get_data', urlencodedParser, (req, res) => {
    gen_pass = req.body.gen_pass

    res.redirect('/save')
})

router.post('/save', urlencodedParser, async (req, res) => {
    username = req.body.username
    private_key = req.body.private_key
    reminder = req.body.reminder

    let user = new User(username, private_key)

    const found = await user.is_in_db()

    if(found){
       user.add_pass(reminder, gen_pass)
    } else {
        return res.redirect('/account')
    }

    res.redirect('/')
})

router.post('/account', urlencodedParser, async (req, res) => {
    username = req.body.username
    private_key = req.body.private_key

    let user = new User(username, private_key)

    const found = await user.is_in_db()

    if(!found){
        user.register()
    } else {
        return res.send("YA EXISTE")
    }

    res.redirect('/')
})

module.exports = router