import React from 'react'
import { CgMoreO } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import { IoIosMore } from 'react-icons/io'

function TrendandSearch() {
    return (
        <div>
            <div className=' w-full h-10 flex sticky top-0 rounded-full p-3 bg-gray-800  gap-2 items-center text-gray-500 focus-within:border border-sky-500 focus-within:text-sky-500 focus-within:bg-black '>
                <i className='px-3 '><FaSearch className='' /></i>
                <input type="text" placeholder='Search' className='bg-transparent w-full focus:outline-none text-white' />

            </div>
            <div className='border rounded-xl h-screen mt-6 border-r-[0.5px] border-gray-700'>
                <div className='p-1'>
                    <h1 className='font-bold text-2xl mb-5 p-3'>What's happening</h1>

                    <div className='mt-2 p-3 flex justify-between place-items-start hover:bg-gray-900'>
                        <div className=' '>
                            <p className='text-sm  text-gray-500' >Entertainment · Trending</p>
                            <h2 className='font-bold '>#LawrenceBishnoiGang</h2>
                        </div>
                        <div className='rounded-full  text-gray-500 text-xl p-1 hover:bg-gray-800 hover:text-sky-500 font-bold '>
                            <IoIosMore />
                        </div>


                    </div>

                    <div className='mt-2 p-3 flex justify-between place-items-start hover:bg-gray-900'>
                        <div className=' '>
                            <p className='text-sm  text-gray-500' >Entertainment · Trending</p>
                            <h2 className='font-bold '>#बहराइच</h2>
                        </div>
                        <div className='rounded-full  text-gray-500 text-xl p-1 hover:bg-gray-800 hover:text-sky-500 font-bold '>
                            <IoIosMore />
                        </div>


                    </div>
                    <div className='mt-2 p-3 flex justify-between place-items-start hover:bg-gray-900'>
                        <div className=' '>
                            <p className='text-sm  text-gray-500' >Only on X · Trending</p>
                            <h2 className='font-bold '>#โหนกระแส</h2>
                        </div>
                        <div className='rounded-full  text-gray-500 text-xl p-1 hover:bg-gray-800 hover:text-sky-500 font-bold '>
                            <IoIosMore />
                        </div>


                    </div>

                    <div className='mt-2 p-3 flex justify-between place-items-start hover:bg-gray-900'>
                        <div className=' '>
                            <p className='text-sm  text-gray-500' >Entertainment · Trending</p>
                            <h2 className='font-bold '>#LawrenceBishnoiGang</h2>
                        </div>
                        <div className='rounded-full  text-gray-500 text-xl p-1 hover:bg-gray-800 hover:text-sky-500 font-bold '>
                            <IoIosMore />
                        </div>


                    </div>

                    <div className='mt-2 p-3 flex justify-between place-items-start hover:bg-gray-900'>
                        <div className=' '>
                            <p className='text-sm  text-gray-500' >Entertainment · Trending</p>
                            <h2 className='font-bold '>#बहराइच</h2>
                        </div>
                        <div className='rounded-full  text-gray-500 text-xl p-1 hover:bg-gray-800 hover:text-sky-500 font-bold '>
                            <IoIosMore />
                        </div>


                    </div>


                    <div className='mt-2 p-3 flex justify-between place-items-start hover:bg-gray-900'>
                        <div className=' '>
                            <p className='text-sm  text-gray-500' >Entertainment · Trending</p>
                            <h2 className='font-bold '>#बहराइच</h2>
                        </div>
                        <div className='rounded-full  text-gray-500 text-xl p-1 hover:bg-gray-800 hover:text-sky-500 font-bold '>
                            <IoIosMore />
                        </div>


                    </div>










                </div>

            </div>
        </div>
    )
}

export default TrendandSearch