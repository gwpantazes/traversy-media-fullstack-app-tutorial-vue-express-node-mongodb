import cors from 'cors';
import express from 'express';
import posts from './routes/api/posts.js';

const app = express();

// Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());

app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}.`));