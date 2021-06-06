import axios from "axios";

const url = "http://localhost:5000/api/posts";

interface Post {
    text: string;
    createdAt: Date;
}

export default class PostService {

    // Get Posts
    static async getPosts(): Promise<Post[]> {
        const result = await axios.get(url);
        return result.data.map((post: Post) => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }));
    }

    // Create Posts

    // Delete Post
}
