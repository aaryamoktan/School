import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Top = () => {
    return (
        <div className='w-full h-[10vh] bg-blue-600 text-white font-semibold  flex flex-wrap justify-center items-center'>
            <div>
                <ul className='flex '>
                    <li className='m-auto text-xl hidden md:block'><CiLocationOn/> </li>
                    <li className='hidden md:block'>Hariwon Sarlahi</li>
                    <li className='mt-1 ml-1 text-xl hidden md:block'><BsTelephone/></li>
                    <li className='ml-1 mt-0.2 hidden md:block'>9803071043,9804859505</li>
                    <li className='mt-1 ml-1 text-xl hidden md:block'><MdOutlineEmail/></li>
                    <li className='ml-1 hidden md:block'>aaryanmoktan2000@gmail.com</li>
                </ul>
            </div>
            <div>
                <ul className='flex ml-4 space-x-2  '>
                    <li><button className='bg-blue-700 w-auto h-[4vh] hover:bg-black  rounded-md hidden md:block'><p className='px-6'><a href="https://www.youtube.com/watch?v=qlmiZqCIGC0&t=14s" target="_blank">Virtual Tour</a></p></button></li>
                    <li><button className='bg-blue-700 w-auto h-[4vh] hover:bg-black  rounded-md hidden md:block'><p className='px-6'><a href="/Studentloin">Student Login</a></p></button></li>
                    <li><button className='bg-blue-700 w-auto h-[4vh] hover:bg-black  rounded-md hidden md:block'><p className='px-6'><a href="/OnlineLabirary">Online Library</a></p></button></li>
                    <li><button className='bg-blue-700 w-auto h-[4vh] hover:bg-black  rounded-md hidden md:block'><p className='px-6'><a href="/RefisterForm">Registration  Form</a></p></button></li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-20 md:space-x-2 ml-5'>
                    <li className='text-3xl bg-white text-blue-800 '><a href=""><CiFacebook/></a></li>
                    <li className='text-3xl bg-white text-pink-800 '><a href=""><CiInstagram/></a></li>
                    <li className='text-3xl  bg-white text-black   '><a href=""><FaSquareXTwitter/></a></li>
                    <li className='text-3xl  bg-white text-red-500 '><a href=""><FaYoutube/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Top