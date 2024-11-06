import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CgMoreO } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import { IoIosMore } from 'react-icons/io'

function TrendandSearch() {

    const [hashtagData, setHashtagData] = useState([]);

    const [search,SetSearch]=useState("");


            useEffect(()=>{
               
                const fetchData=async ()=>{
                    try {
                        const searchtag = await axios.get(`${BACKEND_URL}/api/hashtag/bulk?text=` + search)
                        const sortedData = searchtag.data.data.sort((a, b) => b.tweets.length - a.tweets.length);
                        setHashtagData(sortedData)
                    } catch (error) {
                      
                        
                    }
                }

                fetchData()

            }, [search])


    useEffect(() => {
        // Fetch the data from your API or use static data
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/hashtag`); // Adjust this URL to your API endpoint
                const sortedData = response.data.data.sort((a, b) => b.tweets.length - a.tweets.length);
                setHashtagData(sortedData);
            } catch (error) {
            
            }
        };

        fetchData();
    }, []);


    return (
        <div className='mt-0  h-screen'>

            <div className='bg-black sticky top-2 mt-0 p-1'>
                <div className=' w-full h-10 flex rounded-full p-3 bg-gray-800  gap-2 items-center text-gray-500 focus-within:border border-sky-500 focus-within:text-sky-500 focus-within:bg-black '>
                    <i className='px-3 '><FaSearch className='' /></i>
                    <input type="text" placeholder='Search' className='bg-transparent w-full focus:outline-none text-white' 
                    onChange={(e)=>{
                        SetSearch(e.target.value)
                    }}/>

                </div>
            </div>
            <div className='border rounded-xl mt-6 border-r-[0.5px] border-gray-700'>
                <div className='p-1'>
                    <h1 className='font-bold text-2xl mb-5 p-3'>What's happening</h1>

                    {hashtagData.slice(0,7).map(hashtag => (
                        <div className='mt-2 p-3 flex justify-between place-items-start hover:bg-gray-900'>
                            <div className=' '>
                                <p className='text-sm  text-gray-500' >Entertainment · Trending .Post {hashtag.tweets.length}</p>
                                <h2 className='font-bold '>#{hashtag.text}</h2>
                            </div>
                            <div className='rounded-full  text-gray-500 text-xl p-1 hover:bg-gray-800 hover:text-sky-500 font-bold '>
                                <IoIosMore />
                            </div>


                        </div>
                    ))}








                </div>

            </div>
        </div>
    )
}

export default TrendandSearch