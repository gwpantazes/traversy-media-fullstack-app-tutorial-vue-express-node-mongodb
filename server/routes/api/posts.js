import { Router } from 'express';
import mongodb from 'mongodb';

const router = Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
});


// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Post


async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect("mongodb://api-service-account:password@localhost:27017", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    return client.db('fullstack_vue_express').collection('posts');
    
}


export default router;