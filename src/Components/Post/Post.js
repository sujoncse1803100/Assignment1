import React, { useEffect, useState } from 'react';
import ShowPost from './ShowPost';


const Post = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            {
                post.map(p => <ShowPost post={p} key={p.id} />)
            }
        </div>
    );
};

export default Post;