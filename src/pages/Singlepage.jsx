import React, { useEffect, useState } from 'react'
import Feedcomp from '../components/Feedcomp';

import TrendandSearch from '../components/TrendandSearch';
import Writetweet from '../components/Writetweet';
import axios from 'axios';
import { SideBar } from '../components/SideBar';
import CommentThread from '../components/CommentThread';
import { BACKEND_URL } from '../../config';
import { useNavigate, useParams } from 'react-router-dom';


function Singlepage({ modelType }) {
    const { modelId } = useParams();

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const [maindata, SetMaindata] = useState("");
   
    const [commentondata, SetCommentondata] = useState([]);





    useEffect(() => {
        const fetchMainData = async () => {
            try {
                if (modelType == "Tweet") {
                    const tweet = await axios.get(`${BACKEND_URL}/api/tweet/${modelId}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });

                    SetMaindata(tweet.data.data.content)
                } else if (modelType == "Comment") {
                    const onecomment = await axios.get(`${BACKEND_URL}/api/comment/${modelId}`, {
                        headers: { Authorization: `Bearer ${token}` }

                    });

                  
                    SetMaindata(onecomment.data.data)


                }

            } catch (error) {
                console.log(error)
            }
        };

        fetchMainData();

    }, [modelType,modelId]);


    const fetchComment = async () => {
        try {

          
            const comment = await axios.get(`${BACKEND_URL}/api/comment/?modelId=${modelId}&&modelType=${modelType}`, {
                headers: { Authorization: `Bearer ${token}` }
            });



           
            SetCommentondata(comment.data.data);



        } catch (error) {
            console.error("Error fetching the tweet", error);
        }
    };

    useEffect(() => {

       

        fetchComment();

    }, [modelType, modelId]);


    async function opencomment(modelId) {


        await navigate(`/dash/comment/${modelId}`);
    }


    return (
        <div>

            <div className="grid grid-cols-12 h-screen w-screen mt-0 pt-0">

                <SideBar />
                <div className='flex justify-start grid grid-cols-9 overflow-y-scroll no-scrollbar col-span-9'>

                    <div className="col-span-5 border-r-[0.5px] border-gray-700 overflow-y-scroll no-scrollbar">
                        <div>
                            <Feedcomp content={maindata.content} userId={maindata.userId}></Feedcomp>




                            <Writetweet lable={`Reply to this tweet ` + modelId} modelType={modelType} modelId={modelId} onTweetPosted={fetchComment} />



                            {commentondata.map((comment) => (
                                <div key={comment._id} onClick={() => opencomment(comment._id)}>
                                    <Feedcomp content={comment.content} userId={comment.userId} />
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




