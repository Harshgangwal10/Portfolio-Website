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
            <p>

            I am Harsh, a third-year Computer Science student and a skilled full-stack developer with expertise in React.js for building responsive user interfaces. I have a strong foundation in backend technologies like Node.js, MongoDB, and SQL. Proficient in Data Structures and Algorithms, I’ve solved around 300 problems on platforms like LeetCode and GeeksforGeeks. My experience includes developing projects like  doctor appointment platforms , Food Ordering Website and News app . With a passion for problem-solving and creating impactful digital solutions, I aim to enhance user experiences through my work.</p>
            {/* <p>"I have intermediate experience with Node.js and SQL, enabling contributions to full-stack development.</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
