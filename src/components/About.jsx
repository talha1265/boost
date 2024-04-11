import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import know from '../assets/images/know.jpg';

const about = () => {
  return (
    <>
    <div className="know">
        <h2>Get to Know Us</h2> 
        <div className="about-content-component ">
            <div className="about-text">
              <h4>We're dedicated to boosting online visibility, driving organic traffic and delivering exceptional results with our experienced team.</h4>
              <p>As a leading provider of digital marketing solutions, we pride ourselves on our commitment to excellence, innovation, and client satisfaction. Whether you're a small startup or a large corporation, we have the expertise and resources to help you achieve your digital marketing goals and take your business to the next level.</p>
              <Link href="/aboutus" className='about-btn'>About Us</Link>
            </div>
            <div className="about-img">
            <Image
        src={know}
        alt="Digital marketing team analyzing website data to improve online visibility and drive traffic"
        className='img'

        />
            </div>
        </div>
    </div>
   
    </>
    
  )
}

export default about
