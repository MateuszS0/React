import React from 'react'
import './Skills.css'
import {AiFillCheckCircle} from 'react-icons/ai'

// const Observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show')
//     } else {
//       entry.target.classList.remove('show')
//     }
//   })
// })

// const hiddenElement = document.querySelectorAll('.skills')
// hiddenElement.forEach((el) => Observer.observe(el))

const Skills = () => {
  return (
    <div className='skill-component'>
      <h5>What Skills do I have</h5>
      <h2>My Skills</h2>
      <div className="skills">
      <div className="frontend">
        <h3 className='experience-text'>Front-end Development</h3>
        <div className="center-skills">
        <div className='skill-details'>
<AiFillCheckCircle/>
<h4>HTML</h4>
<small className='text-small'>Experienced</small>
</div>
<div className='skill-details'>
<AiFillCheckCircle/>
<h4>CSS</h4>
<small className='text-small'>Intermediate</small>
</div>
<div className='skill-details'>
<AiFillCheckCircle/>
<h4>Javascript</h4>
<small className='text-small'>Intermediate</small>
</div>
<div className='skill-details'>
<AiFillCheckCircle/>
<h4>React</h4>
<small className='text-small'>Beginner</small>
</div>
{/* <div>
<AiFillCheckCircle/>
<h4>Bootstrap</h4>
<small className='text-small'>Beginner</small>
</div> */}
</div>
      </div>
      <div className="other">
        <h3 className='experience-text'>Other Skills</h3>
        <div className="center-skills">
        <div className='skill-details'>
<AiFillCheckCircle/>
<h4>Java</h4>
<small className='text-small'>Beginner</small>
</div>
<div className='skill-details'>
<AiFillCheckCircle/>
<h4>C++</h4>
<small className='text-small'>Beginner</small>
</div>
<div className='skill-details'>
<AiFillCheckCircle/>
<h4>SQL</h4>
<small className='text-small'>Beginner</small>
</div>
<div className='skill-details'>
<AiFillCheckCircle/>
<h4>Photoshop</h4>
<small className='text-small'>Beginner</small>
</div>
</div>


      </div>
      </div>
    </div>
  )
}

export default Skills