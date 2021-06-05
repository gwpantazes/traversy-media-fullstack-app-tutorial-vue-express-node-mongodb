import { Router } from 'express';
import mongodb from 'mongodb';

const router = Router();

// Get Posts
router.get('/', (req, res) => {
    res.send('hello');
});


// Add Post

// Delete Post


export default router;