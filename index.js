const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {title: ''})
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact-me')
})

app.get('/:path', (req, res) => {
    res.render('404')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})