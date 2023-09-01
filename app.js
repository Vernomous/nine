// imports
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const path = require('path')




app.use(express());

app.use(cors());





// mysql



// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')



app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.render('about')
})
app.get('/login', (req, res) =>{
    res.render('login')
})
app.get('/messages', (req, res) =>{
    res.render('message')
})
app.get('/signup', (req, res) =>{
    res.render('signup')
})















//listen on port 3000
app.listen(process.env.PORT || port, () => console.info(`listening on port ${port}`))
