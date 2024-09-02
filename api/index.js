import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import signup from "../api/Routes/signup.router.js";
import router from './Routes/Signin.routeres.js';

dotenv.config(); 

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)

   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error('Could not connect to MongoDB:', err));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use(signup)
app.use(router)