import React from 'react'
import "./nevbar.css"
const img = require("../../images/logoo.png")
const Nevbar = () => {
  return (
   <>
    <div className='nevbarContainer'>
      <div className='Logo'>
<img src={img} alt="mylogo"/>
      </div>
      <div className='ulli'>
        <ul>
          <li className='active'>Home</li>
          <li>Galalary</li>
          <li>About-us</li>
          <li>Our-Achivement</li>
          <li></li>
        </ul>
      </div>
    </div>
   </>
  )
}

export default Nevbar