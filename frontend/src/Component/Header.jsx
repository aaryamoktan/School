import React from 'react'
import { PiGraduationCapLight } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
const Header = () => {
  return (
    <>
    <div className='w-full h-[85vh] '>
        <img className=' w-full h-[100%]' src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?cs=srgb&dl=pexels-droosmo-2982449.jpg&fm=jpg" alt="my image"></img>
    </div>
    <div className='w-full md:h-auto h-[140vh] relative flex flex-col md:flex-row space-x-32 '>
        <div className='items-center w:[80%] md:w-[40%] md:ml-[150px] h-[50vh] mt-[100px] bg-green-500 '>
        <div className='items-center w-[95%] h-[60vh] '>
            <img className='w-[80%] h-[80%] m-auto md:ml-14 mt-[50px] ' src="https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg" alt="my-image"/>
        </div>
        </div>
        <div className='w-[70%] h-auto  md-[50%] '>
            <div className='flex space-x-4 m-auto mt-[150px]  text-xl text-blue-800 font-semibold'>
                <div className='mt-0 text-green-400 text-4xl'><PiGraduationCapLight/></div>
                <div><p className='mt-1'>WELCOME TO</p></div>
            </div>
            <div className='mt-10'><p className=' text-3xl md:text-5xl font-semibold font-serif '>
                The AARYA  <br/> MOKTAN 
                <br/> SCHOOL IN NEPAL
                </p>
                <p className=' text-md md:text-xl mt-3'>A school is both the educational institution and building designed <br/>
                     to provide learning spaces 
                    and learning environments for the teaching<br/> of 
                   students under the direction of teachers. Most countries have  systems <br/> of formal  education, which is sometimes compulsory</p></div>
            <div>
                <button className='mt-10 bg-blue-500 w-auto h-10 px-10 rounded-md text-white mb-1'><p className='font-semibold text-md md:text-xl '>View our Program</p></button>
            </div>
            
        </div>
    </div>
    {/*latest news */}
    <div className='w-full relative  mt-[20%] md:mt-[10%] h-auto text-2xl flex flex-col justify-center items-center '>
        <div className=''>
            <h2 className='text-6xl font-serif  mb-5'>Latest News</h2>
        </div>
        <div className=' w-full h-auto  flex flex-col flex-wrap md:flex-row mt-10  justify-center items-center space-y-10 md:space-y-0   md:space-x-7'>
            <div className='w-[70%] md:w-[30%]  h-[50vh]  rounded-xl  p-2 mb-2 '>
                <div className='w-full h-[65%]'>
                    <img className='w-full h-[100%] rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMO0e9hC_Dbcg20lAGGj_OFyMgrNofAs3ewA&s" alt=""/>
                </div>
                <div className='flex text-xl mt-3 space-x-2 justify-center'>
                    <div className='flex'>
                        <div className='mt-0.5 text-2xl mr-2'><CiCalendar/></div>
                        <div><p>Nov 11, 2024</p></div>
                    </div>
                    <div className='flex'>
                        <div className='mt-0.5 text-2xl mr-2'><LuMapPin/></div>
                        <div><p>Dillibazar, Kathmandu</p></div>
                    </div>
                </div>
                <div className='mt-6 text-3xl flex justify-center'>
                    <p className='font-serif'> Best Hackthone of 2024</p>
                </div>
            </div>
            <div className='w-[70%] md:w-[30%]  h-[50vh] rounded-xl  p-2'>
            <div className='w-full h-[65%]'>
                    <img className='w-full h-[100%] rounded-xl' src="https://images.news18.com/ibnlive/uploads/2024/06/fathers-day-2024-office-workplace-2024-06-2d6d4d8de3932b32065d01abb1b8d216.jpg?impolicy=website&width=640&height=480" alt=""/>
                </div>
                <div className='flex text-xl mt-3 space-x-2 justify-center'>
                    <div className='flex'>
                        <div className='mt-0.5 text-2xl mr-2'><CiCalendar/></div>
                        <div><p>july 11, 2024</p></div>
                    </div>
                    <div className='flex'>
                        <div className='mt-0.5 text-2xl mr-2'><LuMapPin/></div>
                        <div><p>Dillibazar, Kathmandu</p></div>
                    </div>
                </div>
                <div className='mt-6 text-3xl flex justify-center'>
                    <p className='font-serif'> Father Day of 2024</p>
                </div>
                
            </div>
            <div className='w-[70%] md:w-[30%]  h-[50vh]  rounded-xl  p-2'>
            <div className='w-full h-[65%]'>
                    <img className='w-full h-[100%] rounded-xl' src="https://hritacademy.edu.np/wp-content/uploads/2024/01/Sports-Week-2080.png" alt=""/>
                </div>
                <div className='flex text-xl mt-3 space-x-2 justify-center'>
                    <div className='flex'>
                        <div className='mt-0.5 text-2xl mr-2'><CiCalendar/></div>
                        <div><p>Aug 1, 2024</p></div>
                    </div>
                    <div className='flex'>
                        <div className='mt-0.5 text-2xl mr-2'><LuMapPin/></div>
                        <div><p>Dillibazar, Kathmandu</p></div>
                    </div>
                </div>
                <div className='mt-6 text-3xl flex justify-center'>
                    <p className='font-serif'> Sports Meets of 2024</p>
                </div>
            </div>
            
            
        </div>
    </div>
    <div className='w-full h-auto'>
        <div></div>
        <div>
            <div></div>
        </div>
    </div>
    </>
  )
}

export default Header