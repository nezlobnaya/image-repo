import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes/index.js';
import userRoutes from './routes/userRoutes/index.js';

const app = express();
app.use(bodyParser.json({ exceeded: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send('Image Repo BACKEND'));

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.status || 500).json({
        error: {
            message: error.message
            }});
});

app.use('/api/images', imageRoutes);
app.use('/api/users', userRoutes);

export default app;




