import React, { useEffect, useState } from 'react'
import Feedcomp from './Feedcomp'
import axios from 'axios';
import Writetweet from './Writetweet';
import { BACKEND_URL } from '../../config';

const CommentThread = ({ commentData }) => {
    console.log("-----------------------------------")
    console.log(commentData.comment)
    const token = localStorage.getItem("token");
    const [comment, SetComment] = useState([]);

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const comment = await axios.get(`${BACKEND_URL}/api/comment/?modelId=${commentData._id}&&modelType=Tweet` , {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log(commentData.id)
                console.log(comment)

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

            <Writetweet lable={`Reply to this tweet ` + commentData._id} modelType="Tweet" modelId={commentData._id} />
            {comment.map((comment) => (
                <div key={comment._id} >
                    <Feedcomp content={comment.content} />
                </div>
            ))}

        </div>
    )
}

export default CommentThread