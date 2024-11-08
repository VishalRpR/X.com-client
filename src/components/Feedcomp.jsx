import React, { useEffect, useState } from 'react'
import { BiMessageRounded } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa6'
import { IoHeartOutline } from 'react-icons/io5'
import { LuBookmark } from 'react-icons/lu'
import { MdOutlineFileUpload } from 'react-icons/md'
import axios from "axios";
import { BACKEND_URL } from '../../config'

function Feedcomp({ content, userId = null }) {

    const token = localStorage.getItem("token");

    const [username, SetUsername] = useState("");

    useEffect(() => {
        async function getuser() {
           
            if (userId != null) {
                const user = await axios.get(`${BACKEND_URL}/api/user/id/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }

                })
          
                SetUsername(user.data.data.email)
            }

        }

        getuser();
    }, [])



    const multiplebtn = [

        {
            icon: <BiMessageRounded className='hover:text-sky-500' />,

        },
        {
            icon: <FaRetweet className='hover:text-green-500' />,

        },
        {
            icon: <IoHeartOutline className='hover:text-red-500' />,

        },

    ]


    return (
        <div>
            <div className='grid grid-cols-12  p-2 border-b-[0.5px] border-gray-700 hover:cursor-pointer'>
                <div className='col-span-1 p-1'>
                    <img src="https://avatars.githubusercontent.com/u/120316470?v=4" className='rounded-full' />
                </div>
                <div className='col-span-11 p-1 mr-2'>
                    <div className='flex gap-1'>
                        <h1 className='font-bold'>{username}</h1>
                        <p className='text-slate-500'>@{userId} . 2h</p>
                    </div>
                    <div>
                        <p>
                            {content}
                        </p>
                    </div>
                    <div className='flex justify-between py-2 text-xl text-gray-600'>
                        {multiplebtn.map((multiplebtn, index) => (
                            <div className='hover:bg-slate-900 rounded-full p-2 ' key={index}>{multiplebtn.icon}</div>
                        ))}
                        <div className='flex  text-xl'>
                            <div className=' hover:bg-slate-900 hover:text-sky-500 rounded-full p-2 '>
                                <MdOutlineFileUpload />


                            </div>
                            <div className=' hover:bg-slate-900 hover:text-sky-500  rounded-full p-2 '>

                                <LuBookmark />

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Feedcomp