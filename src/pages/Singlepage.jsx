import React, { useEffect, useState } from 'react'
import Feedcomp from '../components/Feedcomp';

import TrendandSearch from '../components/TrendandSearch';
import Writetweet from '../components/Writetweet';
import axios from 'axios';
import { SideBar } from '../components/SideBar';
import CommentThread from '../components/CommentThread';
import { BACKEND_URL } from '../../config';
import { useParams } from 'react-router-dom';


function Singlepage() {
    const { modelId } = useParams();
    console.log("-----------------------------------")
    // console.log(commentData.comment)
    const token = localStorage.getItem("token");
    const [maintweet,SetMaintweet]=useState("");
    const [comment, SetComment] = useState([]);



    useEffect(() => {
        const fetchTweet = async () => {
            try {
                const tweet = await axios.get(`${BACKEND_URL}/api/tweet/${modelId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                SetMaintweet(tweet.data.data.content)
              
            } catch (error) {
                        console.log(error)
            }
        };

        fetchTweet();

    }, []);




    useEffect(() => {
        const fetchComment = async () => {
            try {
                const comment = await axios.get(`${BACKEND_URL}/api/comment/?modelId=${modelId}&&modelType=Tweet`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

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

            <div className="grid grid-cols-12 h-screen w-screen mt-0 pt-0">

                <SideBar />
                <div className='flex justify-start grid grid-cols-9 overflow-y-scroll no-scrollbar col-span-9'>

                    <div className="col-span-5 border-r-[0.5px] border-gray-700 overflow-y-scroll no-scrollbar">
                        <div>
                            <Feedcomp content={maintweet}></Feedcomp>




                            <Writetweet lable={`Reply to this tweet ` + modelId} modelType="Tweet" modelId={modelId} />
                            {comment.map((comment) => (
                                <div key={comment._id} >
                                    <Feedcomp content={comment.content} />
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="col-span-4 mr-32 pb-2 pl-7 mt-0">
                        <TrendandSearch></TrendandSearch>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default Singlepage




