const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { connect } = require('./db/mongoose');
const saveUser = require('./db/saveUser');
const encryptPassword = require('./encryptMiddleware');
const dotenv = require("dotenv")
dotenv.config()


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', message2: 'Er det her så nemt?'});
}); 

app.get('/login', (req, res) => {
    res.render('loginform')
});

app.use(encryptPassword)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    connect();
    res.send('login post')
    console.log(username)
    saveUser(username, password);
    console.log(password)
    });

app.listen(3000, () => {
    console.log('server started');
    });

