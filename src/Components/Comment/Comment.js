import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowComments from './ShowComments';

const Comment = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => setComments(data))
    }, [setComments]);
    const related_comments = comments.filter(c => c.postId && c.postId == userId)

    return (
        <div>
            <h2 className="mt-2 mb-3">Related comments : </h2>
            <div>
                {
                    related_comments.length &&
                    related_comments.map(cm => <ShowComments key={cm.id} comment={cm} />)
                }
            </div>
        </div>
    );
};

export default Comment;