import React, { useState } from 'react'
import Signup from '../pages/Signup'
import { TbXboxXFilled } from 'react-icons/tb'
import { BsTwitter, BsTwitterX } from 'react-icons/bs'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BACKEND_URL } from "../../config"


const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    function togglePassword() {
        setShowPassword(!showPassword);
    }

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    return (
        <div className="relative h-screen w-screen">
            <div className="absolute inset-0 bg-slate-700 pointer-events-none">
                <div className="filter blur-sm"> {/* This applies the blur */}
                    <Signup />
                </div>
            </div>
            <form className=" bg-black  backdrop:blur-md shadow-md p-6 rounded-xl mx-96 mt-16 absolute top-0 left-0 w-2/5 h-5/6 z-10">
                <div className='flex'>
                    <div onClick={() => {
                        navigate('/signup')
                    }} className='text-2xl p-1 rounded-full hover:bg-slate-800'>
                        <TbXboxXFilled />
                    </div>
                    <div className=' text-3xl flex w-full justify-center items-center'>
                        <BsTwitterX />
                    </div>
                </div>
                <div className='px-28 mt-9'>
                    <h1 className='font-extrabold text-3xl'>Sign In to X</h1>
                    <div className='mt-5'>
                        <input
                            type="text"
                            onChange={(e) => {
                                SetEmail(e.target.value);
                            }}
                            className='bg-transparent border w-full focus:outline-none focus:border-sky-500  border-slate-600 px-3 py-4 mb-3 rounded-md' placeholder='Email' />
                    </div>
                    <div className='flex items-center  rounded-md pr-3 border  focus-within:border-sky-500 border-slate-600 mb-3'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => {
                                SetPassword(e.target.value);

                            }}
                            className='bg-transparent  w-full px-3 focus:outline-none py-4' placeholder='Password' />
                        <div className="bg-transparent hover:bg-slate-950 rounded-full text-2xl text-gray-500 cursor-pointer" onClick={togglePassword}>
                            {showPassword ? <IoEyeOff /> : <IoEye />}
                        </div>
                    </div>


                    <button onClick={async (e) => {
                        e.preventDefault()
                       console.log("clicked")
                        try {
                            const post = await axios.post(`${BACKEND_URL}/api/user/signin`, {
                                email: email,
                                password: password
                            })

                            if (post.data.status == "OK") {


                                localStorage.setItem("token", post.data.data)
                                toast.success(post.data.message)
                                navigate("/dash")
                            }


                        } catch (error) {

                            toast.error(error.response.data.message)

                        }


                    }} className='w-full text-black items-center p-2 my-3 bg-white font-bold rounded-full hover:bg-slate-200 '>Next</button>
                    <div className='mt-5 text-slate-300'>Don’t have an account? <Link to={"/signup"} className='text-sky-500'>Sign up</Link></div>
                </div>




            </form>
        </div>





    )
}

export default Signin