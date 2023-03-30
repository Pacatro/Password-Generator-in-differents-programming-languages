const { Router } = require('express')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })
const User = require('../classes/user')

const router = Router()

let gen_pass
let username
let private_key
let reminder

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

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

    found ? user.add_pass(reminder, gen_pass) : res.redirect('/account')

    delete user

    res.redirect('/')
})

router.post('/account', urlencodedParser, async (req, res) => {
    username = req.body.username
    private_key = req.body.private_key

    let user = new User(username, private_key)

    const found = await user.is_in_db()

    found ? res.send("YA EXISTE") : user.register()

    delete user

    res.redirect('/')
})

router.post('/historial', urlencodedParser, async (req, res) => {
    username = req.body.username
    private_key = req.body.private_key
    reminder = req.body.reminder

    let user = new User(username, private_key)

    const found = await user.is_in_db()

    const historial = await user.get_historial()

    if(historial == []){
        delete user
        return res.redirect('/')
    }

    found ? res.render('historial', {user: capitalize(user.username), historial: historial}) : res.redirect('/account')
})

module.exports = router