import React, { useState } from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
const Nevbar = () => {
  const [menu, setMenu] = useState(false)
  const showmenu = () => {
    setMenu(!menu)
  }
  return (
    <>
      <div className='w-full h-14 bg-transparent flex px-10 justify-between items-center md:px-14'>
        <div className='text-2xl text-indigo-500 font-bold' >School</div>
        <ul className=' flex space-x-10 font-semibold '>
          <li className="hidden md:block cursor-pointer"><a href="/">HOME</a></li>
          <li className="hidden md:block cursor-pointer"><a href="/About">ABOUT US</a></li>
          <li className="hidden md:block cursor-pointer"><a href="/Programs">PROGRAMS</a></li>
          <li className="hidden md:block cursor-pointer"><a href="#">FACULTY</a></li>
          <li className="hidden md:block cursor-pointer"><a href="/Gallary">EVENTS & GALLERY</a></li>
          <li className="hidden md:block cursor-pointer"><a href="/Contact">CONTACT US</a></li>
        </ul>
        <div onClick={showmenu} className=" md:hidden cursor-pointer">
       
{
  menu ?< RxCross1 className="text-2xl font-bold"  />:<FaBars className="text-2xl" />
}

       
            {menu &&<>
              <div className="  bg-blue-600 w-auto mt-[69px] ml-8 h-auto text-white  flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-4">
              <ul className='flex flex-col justify-center items-center'>
              <li className=" cursor-pointer"><a href="#">HOME</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">ABOUT US</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">PROGRAMS</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">FACULTY</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">EVENTS & GALLERY</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">CONTACT US</a></li>
   </ul>
   </div>
            </>}
  
    
          
        </div>
      </div>
      
    </>
  )
}

export default Nevbar