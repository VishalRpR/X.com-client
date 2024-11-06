import axios from 'axios';
import React, { useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { FaRegImage } from 'react-icons/fa6'
import Feedcomp from './Feedcomp';
import toast from 'react-hot-toast';

const Writetweet = () => {

    const[tweet,SetTweet]=useState("");
  return (
      <div>
          <div className='grid grid-cols-12  p-2 border-b-[0.5px] border-gray-700 hover:cursor-pointer'>
              <div className='col-span-1 p-1'>
                  <img src="https://avatars.githubusercontent.com/u/120316470?v=4" className='rounded-full' />
              </div>
              <div className='col-span-11 p-1 mr-2'>
                 
                  <div>
                     <textarea
                     onChange={(e)=>{
                              SetTweet(e.target.value);  
                     }}
                      className='w-full bg-transparent p-3 h-full text-xl focus:outline-none placeholder:text-gray-500' type="text" placeholder='What is Happening?!' />
                  </div>
                  <div className='flex justify-between py-2 text-xl border-gray-700 border-t-[0.5px] pt-4'>
                    
                      <div className='hover:bg-slate-900   text-sky-500 rounded-full p-2 ' >
                          <FaRegImage />
                          </div>
                   
                      <div className='flex font-bold text-base'>
                          <button
                        
                          onClick={async()=>{
                                  const tok=localStorage.getItem("token")
                               if(!tok){
                                    toast.error("Please login")
                                  }
                                  
                                  const response = await axios.post("http://localhost:3000/api/tweet",{
                                      content:tweet
                                  }, {
                                      headers: { Authorization: `Bearer ${tok}` }
                                  }) 

                               

                              if(response.data.data._id){
                                  toast.success("Tweet creatd successfully")
                              }
                                  
                                  
                    
                          }}

                           className='bg-sky-500 rounded-full px-4  hover:bg-sky-600'>Post</button>

                          </div>

                      </div>
                  </div>

              </div>
          </div>
      
      )
}

export default Writetweet