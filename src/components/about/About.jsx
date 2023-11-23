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
      <div className="about_me">Hello! My name is Mateusz Stolarczyk, I'm 22 years old and my hobby is programming, I love learning new things and I'm not afraid of challenges. I've been programming since i was 15 years old, back then i was making simple html websites with only a little amount of css code for fun but now I'm trying to make more difficult websites with the usage of multiple technologies. This is a simple portfolio i made in a few days and I am still updating the projects section. I hope you like it! </div>
      </div>

    </div>
  )
}

export default About