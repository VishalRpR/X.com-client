import React from 'react'

export const LabledInput = ({onChange,}) => {
  return (
    <div>
          <h1 className='font-extrabold text-3xl'>Sign In to X</h1>
          <div className='mt-5'>
              <input
                  type="text"
                  onChange={onChange}
                  className='bg-transparent border w-full focus:outline-none focus:border-sky-500  border-slate-600 px-3 py-4 mb-3 rounded-md' placeholder='Email' />
          </div>
    </div>
  )
}
