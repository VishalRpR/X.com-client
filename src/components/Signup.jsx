import React from 'react';
import { useState } from 'react';
import { BsTwitterX } from "react-icons/bs";
import { GrFormViewHide } from 'react-icons/gr';
import { IoEye, IoEyeOff } from 'react-icons/io5';



const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    function togglePassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div className='grid grid-cols-12 h-screen w-screen mt-0 pt-0'>
            <div className='col-span-7 items-center justify-center mx-auto my-auto' >
                <BsTwitterX className='w-80 h-80' />
            </div>
            <div className='col-span-5'>
                <div className=''>
                    <h1 className='text-7xl pt-20 pb-12 font-extrabold mb-3'>Happening now</h1>

                </div>
                <div className='mr-64 '>
                    <div className=' border-b-2 pb-3 border-slate-600 '>
                        <h1 className='text-4xl mb-3 font-extrabold'>Join today.</h1>
                        <h1 className='text-2xl font-bold mb-3'>Create your account</h1>
                        <div className=''>
                            <input type="text" className='bg-transparent border w-full focus:outline-none focus:border-sky-500  border-slate-600 px-3 py-4 mb-3 rounded-md' placeholder='Email' />
                        </div>
                        <div className='flex items-center  rounded-md pr-3 border  focus-within:border-sky-500 border-slate-600 mb-3'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className='bg-transparent  w-full px-3 focus:outline-none py-4' placeholder='Password' />
                            <div class="bg-transparent hover:bg-slate-950rounded-full text-2xl text-gray-500 cursor-pointer" onClick={togglePassword}>
                                {showPassword ? <IoEyeOff /> : <IoEye />}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='w-full items-center p-3 mt-5 bg-sky-500  text-white font-bold rounded-full hover:bg-sky-600'>Create account</button>

                        <h1 className='font-extrabold text-lg mt-7'>Already have an account?</h1>
                        <button className='w-full text-sky-500 items-center p-2 my-3 bg-transparent font-bold rounded-full hover:bg-slate-900 border  border-slate-600'>Sign in</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup