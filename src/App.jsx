import './App.css'
import { BsTwitterX } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";

import { FaSearch } from "react-icons/fa";
import { RiNotification4Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Feedcomp from './components/Feedcomp';
import { GoPeople } from 'react-icons/go';
import { CgMoreO } from 'react-icons/cg';



function App() {

  const elements=[
    {
      icon:<GrHomeRounded />,
      name:"Home"
    },
    {
      icon:<FaSearch />,
      name:"Explore"
    },
    {
      icon:<RiNotification4Line />,
      name:"Notification"
    },
    {
      icon:<FiMail/>,
      name:"Messages"
    },
    {
      icon:<GoPeople />,
      name:"Communities"
    }
    , {
      icon:<BsTwitterX />,
      name:"Premium"
    },
    {
      icon:<FaRegUser />,
      name:"Profile"
    },
     {
      icon: <CgMoreO />,
      name:"More"
    }
   
  
  
  ]


  return (
  
    <div>

     <div className="grid grid-cols-12 h-screen w-screen mt-0 pt-0">

        <div className="col-span-3 mt-0 pt-0 border-r-[0.5px] border-gray-700 p-4 ml-32 align-middle">
          <div className='text-3xl px-4 py-4 mb-1 rounded-full  hover:bg-gray-800 w-fit cursor-pointer'>
          <BsTwitterX  className=''/>
          </div>
          <div>
              {elements.map((elements, index) => (
                <button key={index} className='flex px-4 py-3 items-center hover:bg-gray-800 rounded-full w-fit'>
                   <div className='text-2xl'>{elements.icon}</div>
                  <div className='font-bold px-4 text-xl'>{elements.name}</div>
                 
                  
                </button>
              ))}
          <div/>
          <button className='rounded-full w-full mt-2 font-bold bg-sky-500 align-middle justify-center px-4 py-3 hover:bg-sky-600 '>POST</button>
          
        </div>
      </div>


      <div className="col-span-5 border-r-[0.5px] border-gray-700 overflow-y-scroll no-scrollbar">
      <Feedcomp></Feedcomp>
      <Feedcomp></Feedcomp>
      <Feedcomp></Feedcomp>
      <Feedcomp></Feedcomp>
      <Feedcomp></Feedcomp>
      <Feedcomp></Feedcomp>


      </div>
      <div className="col-span-4  "></div>
   
     </div>
    </div>
  
  )
}

export default App
