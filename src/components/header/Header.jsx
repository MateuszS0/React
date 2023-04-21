import React from 'react'
import './Header.css'
import {AiFillGithub} from 'react-icons/ai'
import Bitmoji from '../../images/bitmojiv2.png'
const Header = () => {
  return (
    <header>
      <div className="container c-header">
        <h3>Hello I'm</h3>
        <h1>Mateusz Stolarczyk</h1>
        <h4>This is my portfolio</h4>
        <div className="buttons">
          {/* <a href={CV} download >Download CV</a> */}
          <a href="#contact" className='aButton'>Contact me</a>
          <a href="https://github.com/MateuszS0/MyCode" target='_blank' className='aButton'><AiFillGithub/></a>
        </div>
        <img src={Bitmoji} className='Me' />
      </div>
    </header>
  )
}

export default Header