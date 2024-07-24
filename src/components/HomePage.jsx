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
    <div data-aos="zoom-in"   data-aos-duration="1500"  style={{backgroundColor:"yellow",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div data-aos="zoom-out-down"   data-aos-duration="1500"  style={{backgroundColor:"pink",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div data-aos="zoom-out-right"   data-aos-duration="1500"  style={{backgroundColor:"orange",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div data-aos="zoom-out-left"   data-aos-duration="1500"  style={{backgroundColor:"aqua",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" 
    style={{backgroundColor:"brown",width:"300px",height:"200px",margin:"30px"}}>Animation On Scroll</div>
    
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