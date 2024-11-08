import axios from 'axios';
import React, { useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { FaRegImage } from 'react-icons/fa6'
import Feedcomp from './Feedcomp';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

const Writetweet = ({ lable, modelType = null, modelId = null, onTweetPosted }) => {
    const navigate = useNavigate();

  

    const [tweet, SetTweet] = useState("");


    async function postcontenttomodelType() {
        const tok = localStorage.getItem("token")
        if (!tok) {
            toast.error("Please login")
        }

        try {

            const response = await axios.post(`${BACKEND_URL}/api/comment/?modelId=${modelId}&&modelType=${modelType}`, {

                content: tweet

            }, {
                headers: { Authorization: `Bearer ${tok}` }
            })
            if (response) {
                toast.success(response.data.message)
                SetTweet(""); 
                onTweetPosted();

            }


        } catch (error) {

            console.log(error)

        }


    }



    async function postcontenttofeed() {
        const tok = localStorage.getItem("token")
        if (!tok) {
            toast.error("Please login")
        }

        try {

            const response = await axios.post(`${BACKEND_URL}/api/tweet`, {
                content: tweet
            }, {
                headers: { Authorization: `Bearer ${tok}` }
            })

            if (response.data.data._id) {
                toast.success("Tweet creatd successfully");
                SetTweet("");
                onTweetPosted();
                
            }

        } catch (error) {

            toast.error(error.response.data.message)

        }




    }
    return (
        <div>
            <div className='grid grid-cols-12  p-2 border-b-[0.5px] border-gray-700 hover:cursor-pointer'>
                <div className='col-span-1 p-1'>
                    <img src="https://avatars.githubusercontent.com/u/120316470?v=4" className='rounded-full' />
                </div>
                <div className='col-span-11 p-1 mr-2'>

                    <div>
                        <textarea
                        value={tweet}
                            onChange={(e) => {
                                SetTweet(e.target.value);
                            }}
                            className='w-full bg-transparent p-3 h-full text-xl focus:outline-none placeholder:text-gray-500 overflow-hidden ' rows={5} type="text" placeholder={lable} />
                    </div>
                    <div className='flex justify-between py-2 text-xl border-gray-700 border-t-[0.5px] pt-4'>

                        <div className='hover:bg-slate-900   text-sky-500 rounded-full p-2 ' >
                            <FaRegImage />
                        </div>

                        <div className='flex font-bold text-base'>
                            <button

                                onClick={modelType ? postcontenttomodelType : postcontenttofeed}

                                className='bg-sky-500 rounded-full px-4  hover:bg-sky-600'>Post</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}


export default Writetweet