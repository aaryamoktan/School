import React from 'react'
import "./Home.css"
const img = require("../../images/school.jpg");

const Home = () => {
  return (
    <>
       <div className='homeContainre'>
       <span>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
               </span>
        <div className='homeInner'>
            <div className='homeInnerLeft'>  
            
            <button>Explore</button>
            </div>
            <div className='homeInnerRight'>
                <img src={img} alt="img"/>
            </div>
        </div>
       </div>

    </>
  )
}

export default Home