import React from 'react';
import Link from "next/link";
import Image from 'next/image';
// import hero from '../assets/images/seo-hero.png';
import '../assets/css/components-css/hero.css';
// import video from '../assets/videos/background-video.mp4'; 




const Hero = () => {
  return (
   <div className="hero">
     {/* <video autoPlay loop muted className="video-bg">
      <source src={video} type="video/mp4" />
    </video> */}
    <div className="container flex margin">
      <div className="hero-content">
          <h1 className="main-heading">SEO And SEM Solution For Your Bussines.</h1>
          <p>We give wings to your business.</p>
          <h2 className='second-heading'>Book your first Free Consultation</h2>
          <Link href="/contact" className='primary-btn'>Book Now</Link>

        
      </div>
      {/* <div className="hero-img">
      <Image
        src={hero}
        alt="seo-hero"
        className='img'

        />
      </div> */}
    </div>
   </div>
  )
}

export default Hero
