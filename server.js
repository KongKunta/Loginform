const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
const register = require('./routes/register');
const login = require('./routes/login');
const app = express();
dotenv.config()

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', message2: 'Er det her så nemt?'});
}); 

app.use('/login', login)
app.use('/register', register)


app.listen(3000, () => {
    console.log('server started');
    });

