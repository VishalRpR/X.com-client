import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { GoPeople } from 'react-icons/go'
import { GrHomeRounded } from 'react-icons/gr'
import { IoIosMore } from 'react-icons/io'
import { RiNotification4Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../../config'

export const SideBar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const [username, SetUsername] = useState("");
    const[logoutvis,Setlogoutvis]=useState(false);

    useEffect(() => {
        async function getuser() {

            const user = await axios.get(`${BACKEND_URL}/api/user/id`, {
                headers: { Authorization: `Bearer ${token}` }

            })

            SetUsername(user.data.data.email)

        }

        getuser();
    }, [token])




    const elements = [
        {
            icon: <GrHomeRounded />,
            name: "Home",
            path: "/dash"
        },
        {
            icon: <FaSearch />,
            name: "Explore"
        },
        {
            icon: <RiNotification4Line />,
            name: "Notification"
        },
        {
            icon: <FiMail />,
            name: "Messages"
        },
        {
            icon: <GoPeople />,
            name: "Communities"
        }
        , {
            icon: <BsTwitterX />,
            name: "Premium"
        },
        {
            icon: <FaRegUser />,
            name: "Profile"
        },
        {
            icon: <CgMoreO />,
            name: "More"
        }


    ]


    return (

        <div className="col-span-3 mt-0 pt-0 border-r-[0.5px] border-gray-700 p-4 ml-32 align-middle">
            <div className='text-3xl px-4 py-4 mb-1 rounded-full  hover:bg-gray-800 w-fit cursor-pointer'>
                <BsTwitterX className='' />
            </div>
            <div>
                {elements.map((elements, index) => (
                    <button key={index} onClick={() => {
                        navigate(elements.path)
                    }} className='flex px-4 py-3 items-center hover:bg-gray-800 rounded-full w-fit'>
                        <div className='text-2xl'>{elements.icon}</div>
                        <div className='font-bold px-4 text-xl'>{elements.name}</div>


                    </button>
                ))}
                <div />
                <button className='rounded-full w-full mt-2 font-bold bg-sky-500 align-middle justify-center px-4 py-3 hover:bg-sky-600 '
                onClick={()=>{
                    navigate("/write")
                }}>Post</button>

               {logoutvis?<Logout username={username} onClick={()=>{
                    localStorage.removeItem("token")
                    navigate("/signin")
                }} />:null}


                <div className='mt-28 gap-3  px-3 grid grid-cols-8 flex justify-start items-center rounded-full w-full  mt-2 font-bold bg-transparent justify-center hover:bg-slate-800'
                    onClick={() => {
                       Setlogoutvis(!logoutvis)
                    }}>
                    <div className='col-span-2 '>
                        <img src="https://avatars.githubusercontent.com/u/120316470?v=4" className='rounded-full' />
                    </div>
                    <div className='flex justify-between items-center col-span-6'>
                        <div className='py-2'>
                            <div>{username.substring(0, 6)}</div>
                            <div className='text-slate-500'>@vishalrpr</div>
                        </div>

                        <div className=' text-2xl font-extrabold px-2'>
                            <IoIosMore />
                        </div>
                    </div>

                </div>





            </div>
        </div>

    )
}


const Logout = ({ onClick, username }) => {
    return <div>
        <div className='absolute bottom-28 rounded-3xl bg-black shadow-slate-300 w- hover:bg-slate-800 shadow-inner border-b-[1px] border-slate-100  px-8 py-5'
            onClick={onClick}>
            <div className='text-md font-bold mx-5'>
                Log out @{username.substring(0, 6)}
            </div>

        </div>
    </div>
}
