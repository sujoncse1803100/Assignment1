import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowDetails from './ShowDetails/ShowDetails';



const Detail = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [setPost]);
    const selected_post = post.filter(p => p.id && p.id == id);

    return (
        <div>
            {
                selected_post.length &&
                selected_post.map(p => <ShowDetails key={p.id} post={selected_post} />)
            }
        </div >
    );
};

export default Detail;