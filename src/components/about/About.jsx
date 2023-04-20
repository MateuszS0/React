import React from 'react'
import './About.css'
import Photo from '../../images/photo.jpg'

const About = () => {
  return (
    <div className='about_component'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='wrapper'>
      <img src={Photo} className='photo' />
      <div className="about_me">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id mi est. Aliquam eget dui vel nisl suscipit iaculis vel nec magna. Proin at ligula eu libero dictum bibendum. Nullam vitae sapien sed tortor suscipit semper. Ut ut purus varius, lacinia purus vel, mollis nulla. Vestibulum eleifend neque in ullamcorper scelerisque. Cras tempor lacinia nulla fermentum pellentesque. Maecenas ut dignissim libero, eu porttitor turpis. Cras quis ante sapien.</div>
      </div>

    </div>
  )
}

export default About