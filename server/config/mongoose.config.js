import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@mongodb.zjrzgwg.mongodb.net/${DB_NAME}`;

async function dbConnect() {
  try {
    await connect(DB_URI, { retryWrites: true });
    console.log('Connected to DB');
  } catch (err) {
    console.log('DB connection error.');
  }
}

export default dbConnect;const mongoose = require('mongoose');
const uri = process.env.MONGO_DB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));