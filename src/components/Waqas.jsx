import React, { useEffect } from 'react'
import Aos from 'aos';
import  "aos/dist/aos.css";
const Waqas = () => {
    useEffect (()=>{
        Aos.init()
    },[]);
  return (
    <div>
      <div 
      data-aos="fade-right"
         data-aos-duration="3000"
       style={{height:"300px", width:"310px",backgroundColor:"navy",margin:"15px"}}>
         this is a div
      </div>
      <div
       data-aos="flip-left"
        data-aos-duration="3000"                   
       style={{height:"300px", width:"310px",backgroundColor:"green",margin:"15px"}}>
         this is a div
      </div>
      <div
      data-aos="zoom-out-up"
           data-aos-duration="3000"
       style={{height:"300px", width:"310px",backgroundColor:"red",margin:"15px"}}>
         this is a div
      </div>
    </div>
  )
}

export default Waqas
