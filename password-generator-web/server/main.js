const express = require('express')

const app = express()

const port = 8000

app.use(express.static('../client'))

app.listen(port, () => {
    console.log('Listening in port', port)
})