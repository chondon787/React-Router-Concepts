import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
 

 

const Posts = () => {
    const posts = useLoaderData();

    return (
        <div>
            <h3>Some Posts : {posts.length}</h3>
            <div className="grid md:grid-cols-3 gap-3 p-10">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;