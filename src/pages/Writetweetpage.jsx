import React from 'react'

import Parcomp from './Dash'

import Writetweet from '../components/Writetweet'
import { useNavigate } from 'react-router-dom'
import { TbXboxXFilled } from 'react-icons/tb'
import { BsTwitterX } from 'react-icons/bs'


const Writetweetpage = () => {

    const navigate = useNavigate();


    return (
        <div className="relative h-screen w-screen">
            <div className="absolute inset-0 bg-slate-700 pointer-events-none">
                <div className="filter blur-sm"> {/* This applies the blur */}
                    <Parcomp />
                </div>
            </div>
            <div className="  bg-black  backdrop:blur-md shadow-md p-6 rounded-xl mx-96 mt-16 absolute top-0 left-0 w-2/5 h-2/4 z-10">
                <div className='flex'>
                    <div onClick={() => {
                        navigate('/dash')
                    }} className='text-2xl p-1 rounded-full hover:bg-slate-800'>
                        <TbXboxXFilled />
                    </div>
                    <div className=' text-3xl flex w-full justify-center items-center'>
                        <BsTwitterX />
                    </div>
                </div>
                <div className='pt-4'>
                    <Writetweet lable='What is Happening?!' modelType={null} modelId={null} />
                </div>

            </div>
        </div>





    )
}

export default Writetweetpage