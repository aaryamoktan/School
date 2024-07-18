import React from 'react'

const Footer = () => {
    return (
        <>
            <div className=' w-full bg-blue-600 text-white mt-0  flex flex-col md:flex-row items-center md:items-start justify-center gap-44'>
                <div className='mt-10'>
                <h1>My Aarya School</h1>
                </div>
                <div className='mt-10'>
                    <h1>Quick Links</h1>
                    <ul className='mt-10'>
                    <li className=" cursor-pointer"><a href="#">HOME</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">ABOUT US</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">PROGRAMS</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">FACULTY</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">EVENTS & GALLERY</a></li>
          <li className="cursor-pointer mt-5 p-2 hover:font-extralight "><a href="#">CONTACT US</a></li>
                    </ul>
                    
                </div>
                <div className='mt-10'>
                <h1>Find Us On Map</h1>
                    
                </div>
                <div className='mt-10'>
                    <h1>Latest News</h1>
                </div>
            </div>
        </>
    )
}

export default Footer