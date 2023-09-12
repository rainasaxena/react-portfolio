import React, {useEffect} from 'react'
import '../assets/styles/About.scss';
import rachit2 from "../assets/images/rachit2.jpg"


import Aos from'aos'
import "aos/dist/aos.css"
  

const About = () => {
    useEffect(()=> {
        Aos.init({duration:1500});
      },[]);


  return (
    <div id='about-container'>


        <div className="about-aside" data-aos="fade-right">
            <img src={rachit2} alt="" />
        </div>

        <div className="about-content" data-aos="fade-left">
            <h3>ABOUT ME</h3>
            <p>I am an Architect and Urban Designer as well. Dealing in various themes of projects such as, residential, commercial, industrial and educational buildings and campuses. My vision is to create optimised and functional spaces, that are aesthetically and fuctionally systematic, pleasing and comfortable.</p>
        </div>

    </div>
  )
}

export default About