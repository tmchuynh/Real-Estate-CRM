import express, { json, urlencoded } from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import router from './routes/user.routes.js';
import './config/mongoose.config.js';

const app = express();
dotenv.config();

//REQUIRED FOR CRUD
app.use(json(), cors(), urlencoded({ extended: true }));
app.use("", router);


//THIS SHOULD BE LAST
async function serverStart() {
    try {
        const port = process.env.PORT ||5000;
        app.listen(port, () => console.log(`Listening on port: ${port}`));
    } catch (err) {
        console.log(err);
    }
}

serverStart()
