import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;


mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => 
        console.log(`Mongo Connection successful. Server running → PORT ${PORT}`)))
    .catch((err) => console.log(`${err} Mongo Connection unsuccessful`));



