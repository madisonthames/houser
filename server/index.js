const express = require('express');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controller');
const cors = require('cors');

require('dotenv').config();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('The database is connected.')
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(cors());

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/house/:id', controller.deleteHouse)
app.put('/api/houses:id', controller.updateHouse)


app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`The server is listening on Port ${SERVER_PORT}.`)
})

