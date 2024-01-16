const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();
const PORT=8000


const staticPath = path.join(__dirname)
// console.log(__dirname)
app.use(express.static(staticPath)); //isse hum koi bhi static file run krwa skte hai

//We need to write this peice of code to render a file on particular path  
const pathName = path.join(__dirname,'/templates/views')
// console.log(pathName)
const partialsPath = path.join(__dirname,'/templates/partials')


app.set('view engine', 'hbs')
app.set('views', pathName)
hbs.registerPartials(partialsPath)
app.set('env development');


app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('*', (req, res) => {
    res.render('error')
})



app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`)
})