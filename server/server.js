import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import dogRouter from './routes/dog-routes.js';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.json(), cors());
app.use('/api/dogs', dogRouter);

app.get('/api/message', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

async function serverStart() {
  try {
    dbConnect();
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Listening on port: PORT`));
  } catch (err) {
    console.log(err);
  }
}

serverStart();