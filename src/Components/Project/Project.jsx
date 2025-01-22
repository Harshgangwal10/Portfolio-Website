import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_data from '../../assets/project_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div id='project' className='projects'>
      <div className='project-title'>
        <h1>My Project</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="project-container">
        {project_data.map((project,index)=>{
          return <img key ={index} src={project.p_img} alt="" />

        })}
      </div>
      {/* <div className="project--readmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
      
    </div>
  )
}

export default Project
