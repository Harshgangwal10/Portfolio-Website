import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>"I'm a pre-final year Computer Science student passionate about web development, focused on creating user-friendly websites."I specialize in HTML, CSS, JavaScript, and React, crafting responsive and intuitive user interfaces.""</p>
            <p>"I have intermediate experience with Node.js and SQL, enabling contributions to full-stack development.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
