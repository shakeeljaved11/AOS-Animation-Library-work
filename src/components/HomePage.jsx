import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import './Styles.css';
const HomePage = () => {

    useEffect(()=>{
        Aos.init()
        // Aos.init({duration:2000})
    },[])
  return (
    <>
    <div className='main'>
    <div 
    data-aos="fade-right"
    data-aos-duration="1500"
    style={{backgroundColor:"red",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div 
    data-aos="fade-left"
    data-aos-duration="3000"
    style={{backgroundColor:"green",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div
    data-aos="flip-left"
    style={{backgroundColor:"blue",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div data-aos="zoom-in" style={{backgroundColor:"yellow",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div style={{backgroundColor:"pink",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div style={{backgroundColor:"orange",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div style={{backgroundColor:"aqua",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div data-aos="zoom-in" style={{backgroundColor:"brown",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    </div>
    <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
</div>
    </>
  )
}

export default HomePage