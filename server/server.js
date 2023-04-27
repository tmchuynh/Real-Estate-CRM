/*
******************************************************************
THIS IS A REAL ESTATE CRM USING EXPRESS AND REACT FRONT-END
WE WILL BE USING SESSION AND COOKIE PARSER TO TRACK USER SESSIONS
CORS ALLOWS THE REACT FRONT-END TO MAKE REQUESTS TO THE SERVER API
USER AND LEAD MODELS, ROUTES, CONTROLLERS MAKE UP THE MVP LOGIC
******************************************************************
*/
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config');

app.use(express.json(), cors(), express.urlencoded({ extended: true }), cookieParser(), session({
    secret: process.env.SESSIONKEY,
    resave: false,
    saveUninitialized: false
}));
//ADD ALL MODEL ROUTES HERE
require('./routes/user.routes')(app);
require('./routes/lead.routes')(app);

//THIS SHOULD BE LAST
app.listen(port, () => console.log(`Listening on port: ${port}`) );