const express = require('express')
const app = express()

const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    console.log('response is created')
    res.render('index')
})

app.listen(3001, () => {
    console.log('Server started at localhost:3001')
})