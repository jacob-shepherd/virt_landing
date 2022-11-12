const express = require("express")
const ejs = require('ejs')
const session = require('express-session')
const path = require('path')
const ejsMate = require('ejs-mate')
var cors = require('cors')


const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())


app.get('/', (req, res) => {
    return res.render('main')
})


app.get('/fetch', cors(), (req, res) => {
    return res.render('fetch')
})

app.post('/fetch', cors(), (req, res) => {
    console.log('got request')
    res.send(req.body)
})



//handling

app.use((req, res) => {
    res.redirect('/')
})

app.use((err, req, res) => {
    res.redirect('/')
})

app.use((err, req, res) => {
    res.redirect('/')
})

app.get('*', (req, res) => {
    res.redirect('/')
})


const PORT = 3000


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})