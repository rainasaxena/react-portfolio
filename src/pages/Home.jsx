import '../assets/styles/Home.scss';
import rachit from "../assets/images/rachit.jpg"
import React, { useEffect } from 'react'

import Aos from'aos'
import "aos/dist/aos.css"

const Home = () => {
  useEffect(()=> {
    Aos.init({duration:1700});
  },[]);
  
  return (
    <div>
        <div id="home-container">
            <div data-aos="fade-up" className="home-aside">
                <p>Welcome, I am</p>
                <h1>RACHIT SAXENA</h1>

            </div>
            <div data-aos="fade-down" className="home-image">
                <img src={rachit} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home