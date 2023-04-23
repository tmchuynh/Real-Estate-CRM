import { connect } from 'mongoose';

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@mongodb.zjrzgwg.mongodb.net/${DB_NAME}`;

connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
