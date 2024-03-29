const express = require('express')
const router = require('./routes/router')
const path = require('path')
const config = require('./config/config')

const app = express()

const port = config.PORT || 8000
const url = 'http://localhost:' + port

app.set('views', path.join(__dirname, '../client/views'))
app.set('view engine', 'ejs')

app.use('/', express.static(path.join(__dirname, '../client')))
app.use('/save', express.static(path.join(__dirname, '../client/save_form')))
app.use('/account', express.static(path.join(__dirname, '../client/account_form')))
app.use('/historial', express.static(path.join(__dirname, '../client/historial_form')))
app.use('/', router)

app.listen(port, () => {
    console.log('Listening in', url)
})