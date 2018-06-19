// jshint esversion : 6

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');

var users = require('./route/users');
require('./config/passportlocal');

var app = express();
var mongodbUrl = 'mongodb://localhost:27017/project';

// MongoDB Connection
mongoose.connect(mongodbUrl);
mongoose.connection.on('connected', () => {
	console.log('Connected to mongodb '+ mongodbUrl);
});
mongoose.connection.on('error', (err) => {
	console.log('Error Connecting to mongo '+ mongodbUrl);
	console.log(err);
});

// Cookie
app.use(cookieParser());

// Express Session
const MongoStore = require('connect-mongo')(session);
app.use(session(
	{ 
		secret: 'app',
		name: 'id',
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 36000000,
			httpOnly: false,
			secure: false 
		},
  		store: new MongoStore({ mongooseConnection: mongoose.connection })  
	}
));

// Add Passport Code
app.use(passport.initialize());
app.use(passport.session());

// Static Pages /public/index.html
// app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// CORS
app.use(cors(
	{
		origin: ['http://127.0.0.1:4200'],
		credentials: true
	}
));

// Users route
app.use('/users',users);

app.use('*', (req, res) => {
	res.status(401).json({message: 'URL not Found'});
});

app.listen(3000, () => {
	console.log('Started server using port no 3000');
});