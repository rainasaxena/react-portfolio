import React, {useEffect} from 'react'
import '../assets/styles/Skills.scss';


import autocad from "../assets/images/autocad.png"
import sketchup from "../assets/images/sketchup.png"
import vray from "../assets/images/vray.png"
import ps from "../assets/images/ps.png"
import lumion from "../assets/images/lumion.png"
import filmora from "../assets/images/filmora.png"

import Aos from'aos'
import "aos/dist/aos.css"
  

    

const Skills = () => {

    useEffect(()=> {
        Aos.init({duration:500});
      },[]);

  return (
    <div id="skills-container" data-aos="fade-up">

        <h1>SKILLS</h1>

        <div className="left" data-aos="fade-left">
            <div className="circle">
                <img src={autocad} id='autocad' alt="" />
                <p>AutoCAD</p>
            </div>

            <div className="circle">
                <img src={sketchup} id='sketchup' alt="" />
                <p>Sketchup</p>
            </div>

            <div className="circle">
                <img src={vray} id='vray' alt="" />
                <p>V-ray</p>
            </div>

        </div>


        <div className="right" data-aos="fade-right">
            <div className="circle">
                <img src={ps} id='ps' alt="" />
                <p>Photoshop</p>
            </div>

            <div className="circle">
                <img src={lumion} id='lumion' alt="" />
                <p>Lumion</p>
            </div>

            <div className="circle">
                <img src={filmora} id='filmora' alt="" />
                <p>Filmora</p>
            </div>

        </div>

    </div>
  )
}

export default Skills