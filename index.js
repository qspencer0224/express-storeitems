const express = require('express')
//Bringing in express/ import

const app = express()
//Connects express instance to the variable 'app'


app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
//This is our Middleware

const PORT = 3000

const shoestore = ['shoes', 'shoe cleaner', 'shirt', 'hoodie', 'sweats'];

//--------Creating Routes based on Path/Rest Routes

app.get('/', function (req, res) {
    res.send('<h1>Hello Express</h1>')
})

app.get('/home', (req, res) =>{
    res.render('Home')
})

app.get('/contact', (req, res) =>{
    res.render('Contact')
})

app.get('/about', (req, res) =>{
    res.render('About')
})

app.get('/:indexOfShoeStoreArray', (req, res) => {
    res.send(shoestore[req.params.indexOfShoeStoreArray])
})

//req stands for 'Request', res stands for 'Response'
app.listen(PORT, (req, res) =>{
    console.log(`Server is now listing on Port ${PORT}`)
} )
//This creates the port based on PORT value