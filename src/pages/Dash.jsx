import React, { useEffect, useState } from 'react'
import Feedcomp from '../components/Feedcomp';

import TrendandSearch from '../components/TrendandSearch';
import Writetweet from '../components/Writetweet';
import axios from 'axios';
import {SideBar} from '../components/SideBar';
import { BACKEND_URL } from '../../config';
import { useNavigate } from 'react-router-dom';


function Dash() {
    const navigate=useNavigate();
    const [content, SetContent] = useState([]);
    
    const fetchTweet = async () => {
        try {
            const tweet = await axios.get(`${BACKEND_URL}/api/tweet`);

            SetContent(tweet.data.data);
        } catch (error) {

        }
    };
  
    useEffect(() => {
       

        fetchTweet();

    }, []);

    const handleTweetClick = (tweet) => {
       
       

        navigate(`/dash/tweet/${tweet._id}`)
    };



    return (
        <div>

            <div className="grid grid-cols-12 h-screen w-screen mt-0 pt-0">

                <SideBar/>
                <div className='flex justify-start grid grid-cols-9 overflow-y-scroll no-scrollbar col-span-9'>

                    <div className="col-span-5 border-r-[0.5px] border-gray-700 overflow-y-scroll no-scrollbar">
                        <Writetweet lable='What is Happening?!' modelType={null} modelId={null} onTweetPosted={fetchTweet}></Writetweet>
                      
                           { content.map((tweet) => (
                                <div key={tweet._id} onClick={() => handleTweetClick(tweet)}>
                                    <Feedcomp key={tweet._id} content={tweet.content} userId={tweet.user} />
                                </div>
                            ))}
                      

                      


                    </div>

                    <div className="col-span-4 mr-32 pb-2 pl-7 mt-0">
                        <TrendandSearch></TrendandSearch>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default Dash