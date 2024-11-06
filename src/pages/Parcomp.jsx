import React, { useEffect, useState } from 'react'
import Feedcomp from '../components/Feedcomp';

import TrendandSearch from '../components/TrendandSearch';
import Writetweet from '../components/Writetweet';
import axios from 'axios';
import {SideBar} from '../components/SideBar';
import CommentThread from '../components/CommentThread';


function Parcomp() {
    const [content, SetContent] = useState([]);
    const [selectedTweet, setSelectedTweet] = useState(null);
  
    useEffect(() => {
        const fetchTweet = async () => {
            try {
                const tweet = await axios.get("http://localhost:3000/api/tweet");
                console.log(tweet.data)
                SetContent(tweet.data.data);
            } catch (error) {
                console.error("Error fetching the tweet", error);
            }
        };

        fetchTweet();

    }, []);

    const handleTweetClick = (tweet) => {
        console.log(tweet)
        setSelectedTweet(tweet);
    };



    return (
        <div>

            <div className="grid grid-cols-12 h-screen w-screen mt-0 pt-0">

                <SideBar/>
                <div className='flex justify-start grid grid-cols-9 overflow-y-scroll no-scrollbar col-span-9'>

                    <div className="col-span-5 border-r-[0.5px] border-gray-700 overflow-y-scroll no-scrollbar">
                        <Writetweet></Writetweet>
                        {selectedTweet ? (
                            <CommentThread commentData={selectedTweet} />
                        ) : (
                            content.map((tweet) => (
                                <div key={tweet._id} onClick={() => handleTweetClick(tweet)}>
                                    <Feedcomp content={tweet.content} />
                                </div>
                            ))
                        )}

                      


                    </div>

                    <div className="col-span-4 mr-32 pb-2 pl-7 mt-0">
                        <TrendandSearch></TrendandSearch>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default Parcomp