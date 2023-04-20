import React from 'react'
import './Projects.css'
import Picture from '../../images/portfolio-picture.png'
import wwwebflix from '../../images/Wwwebflix.png'
const Projects = () => {
  return (
    <div className='project-component'>
        <h2 className='h2-P'>My Projects</h2>
        <h3 className='h3-P'>That i'm working on at this moment</h3>

        <div className="container-p">
        <div className="project-container">
        <img src={Picture} alt="" className='pictures'/>
        </div>

        <div className="project-container">
        <img src="" alt="" />
        <img src={wwwebflix} alt="" className='pictures'/>
        </div>
        </div>

    </div>
  )
}

export default Projects