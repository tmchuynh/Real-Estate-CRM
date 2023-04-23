import express, { json, urlencoded } from 'express';
import cors from 'cors';
const app = express();
require('dotenv').config();
const port = process.env.PORT;
import '../server/config/mongoose.config.js';
//REQUIRED FOR CRUD
app.use(json(), cors(), urlencoded({ extended: true }));
//ADD ALL MODEL ROUTES HERE
require('./routes/user.routes')(app);
require('./routes/lead.routes')(app);
//THIS SHOULD BE LAST
app.listen(port, () => console.log(`Listening on port: ${port}`) );