import React from 'react'
import { NavLink } from 'react-router-dom'
import about from '../Images/silhouettes-businesspeople-talking-about-meeting.jpg'
const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni veritatis. Explicabo repellat voluptatum natus, dolorem omnis voluptates officia reiciendis illo ad autem cupiditate tenetur, excepturi mollitia repellendus facilis totam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni veritatis. Explicabo repellat voluptatum natus, dolorem omnis voluptates officia reiciendis illo ad autem cupiditate tenetur, excepturi mollitia repellendus facilis totam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni veritatis. Explicabo repellat voluptatum natus, dolorem omnis voluptates officia reiciendis illo ad autem cupiditate tenetur, excepturi mollitia repellendus facilis totam.
            </p>
            <NavLink to="/contact" className='btn btn-outline-primary px-3'>Contact Us</NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-between '>
            <img src={about} alt="About Us" height="400px" width="400px" />
            {

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About