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

router.post('/save', urlencodedParser, (req, res) => {
    username = req.body.username
    private_key = req.body.private_key
    reminder = req.body.reminder

    console.log('Password:', gen_pass)
    console.log('Username:', username)
    console.log('Private key:', private_key)
    console.log('Reminder:', reminder)

    res.redirect('/')
})

router.post('/account', urlencodedParser, (req, res) => {
    username = req.body.username
    private_key = req.body.private_key

    let user = new User(username, private_key)

    console.log(user.is_in_db())
})

module.exports = router