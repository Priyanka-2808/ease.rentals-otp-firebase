const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const App = require('./src/App');
const port = process.env.port || 3000;
const admin = require('firebase-admin');

const app = express();

//db conn

mongoose.connect('mongodb://0.0.0.0:27017/ease.rentals',{useNewUrlParser:true})
const db = mongoose.connection;

db.on("error",() => {console.log("error in connection");})
db.once('open',() => {console.log("Connected");})

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use('/', App)

app.post('/register', async (req, res) => {
    try{
        const { email, password} = req.body;
        const userRecord = await admin.auth().createUser({
            email,
            password,
          });
    } catch (err) {
        console.error('Error during user registration:', err);
        res.status(500).json({ error: 'An error occurred during registration'});
    }
    
});

app.listen(port)