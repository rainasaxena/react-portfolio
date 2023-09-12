import React from 'react'
import '../assets/styles/Header.scss';
import RS from "../assets/images/RS.png"
import { useState, useEffect } from 'react';




const Header = () => {
  const [sticky, setSticky] = useState(false);

 useEffect(() => {
   const handleScroll=()=>{
    setSticky(window.scrollY>0)
    console.log(window.scrollY);
   }

   window.addEventListener('scroll', handleScroll)
   
   return () => window.removeEventListener('scroll',handleScroll)

  })
 



  return (
    <nav className={`${sticky? 'sticky' : ''}`}>
      <div className="nav-inner">
        <span className='logo'><img src={RS} alt="" /></span>

        <div className="links">
          <a href="/">HOME</a>
          <a href="/#about-container">ABOUT</a>
          <a href="/#skills-container">SKILLS</a>
          <a href="/#exp-container">EXPERIENCE</a>
          <a href="/#ach-container">ACHIEVEMENTS</a>
          <a href="/#footer-container">CONTACT</a>
        </div>
      </div>
    </nav>


    
  );
}

export default Header