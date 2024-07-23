import React from 'react'
import { Form } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='w-full auto'>
      <div className='w-full auto mt-5'>
        <a href="https://www.google.com/maps"><img  className="w-full h-[60vh]" src="https://staticmapmaker.com/img/google-placeholder.png" alt="map img"/></a>
      </div>
      <div className=' brightness-100 bg-blue-100' >
       <form>
        <div className=' flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-serif mt-[15%] ml-32 text-slate-700'>ContactUs</h1>
          <div className='flex flex-col gap-7 mt-10'>
            <input type="text" className='border-black w-[200%] h-[5vh] border-solid-10' placeholder='Your name'/>
            <input type="Email" className='border-black w-[200%] h-[5vh] border-solid-10' placeholder='Your Email'/>
            <input type="text" className='border-black w-[200%] h-[5vh] border-solid-10' placeholder='Contact Number'/>
            <textarea type="text" className=' w-[200%] ' placeholder='query'/>
            <button className=' relative bg-white left-20 mb-20 pl-5 pr-5 '>Submit</button>
          </div>
        </div>
       </form>
      </div>
    </div>
  )
}

export default Contact