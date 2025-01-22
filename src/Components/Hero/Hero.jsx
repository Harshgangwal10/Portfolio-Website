import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg';
import linkedin_icon from '../../assets/icons8-linkedin (1).svg'
import github_icon from '../../assets/icons8-github.svg'
import Resume from '../../assets/Harsh-Gangwal_Resume.pdf'

const Hero = () => {
  return (<>
   <div id='home' className='hero'>
  <img src={profile_img} alt="" />  
  <h1><span>I'm Harsh Gangwal,</span> Full Stack Web Developer</h1>  
  <p> I am a pre-final year Computer Science student with a focus on Full Stack Web Developer ,skilled in HTML, CSS, JavaScript, and React for building responsive web applications.</p>  
  
  <div className='social-media'>
          <a href="https://linkedin.com" target="_blank" >
            <img src={linkedin_icon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={github_icon} alt="github icon" />
          </a>
          
        </div> 
        <a href={Resume}>
        <button className="hero-resume" download>Resume</button>
         </a>    
        
  
   
 
    </div>
    {/* <span>
    <a href="https://linkedin.com" target="_blank">
      <img src={linkedinIcon} alt="Linkedin icon" />
    </a>
    <a href="https://github.com" target="_blank">
      <img src={githubIcon} alt="github icon" />
    </a>
  
  </span> */}
  </>
   
  )
}

export default Hero
