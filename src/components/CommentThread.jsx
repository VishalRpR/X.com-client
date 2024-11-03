import React, { useEffect, useState } from 'react'
import Feedcomp from './Feedcomp'
import axios from 'axios';
import Writetweet from './Writetweet';

const CommentThread = ({ commentData }) => {
    const token = localStorage.getItem("token");
    const [comment, SetComment] = useState([]);

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const comment = await axios.get("http://localhost:3000/api/comment/?modelId=" + commentData._id,{
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log(comment.data.data)
                SetComment(comment.data.data);
            } catch (error) {
                console.error("Error fetching the tweet", error);
            }
        };

        fetchComment();

    }, []);
    return (
        <div>
            <Feedcomp content={commentData.content}></Feedcomp>
            {comment.map((comment) => (
                <div key={comment._id} >
                    <Feedcomp content={comment.content} />
                </div>
            ))}
            <Writetweet/>

        </div>
    )
}

export default CommentThread