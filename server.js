const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
const register = require('./routes/register');
const login = require('./routes/login');
const app = express();
const user = require('./routes/user')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
dotenv.config()



app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "Siuuu",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: `mongodb+srv://pechr87:${process.env.MONGOKODE}@cluster0.j0sd1j1.mongodb.net/?retryWrites=true&w=majority` })
})
);


app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', message2: 'Er det her så nemt?'});
}); 

app.use('/login', login)
app.use('/register', register)
app.use('/user', user)


app.listen(3000, () => {
    console.log('server started');
    });

