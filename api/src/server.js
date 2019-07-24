const express = require('express');
const passport = require('passport');
const cors = require('cors');
require('./passport');

const { connectDatabase } = require('./database');

const AuthController = require('./controllers/auth');
const MatchController = require('./controllers/match');
const UserController = require('./controllers/user');

connectDatabase();
const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cors());

app.use('/auth', AuthController);
app.use('/match', MatchController);
app.use('/user', UserController);

app.listen(5000, () => console.log('Server listening at port 5000'));

module.exports = app;