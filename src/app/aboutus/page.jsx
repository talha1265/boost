"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import about1 from '../../assets/images/about1.jpg'
import './about.css'
import TopHead from '@/components/TopHead'



const page = () => {
      const heading1 = "Discover Our Story and Mission";
      const heading2 = "We give you the support  you need to grow your business."
  return (
  <>
    <div className="about-content">
       <TopHead aboutheading1={heading1} aboutheading2={heading2}/>
    </div>
    {/* <div className="top-banner">
        <h2>Discover Our Story and Mission</h2>
        <h2>We give you the support  you need to grow your business.</h2>
        <Link href="../contact/page.jsx" className='primary-btn'>Book Now</Link>

    </div> */}
    <div className='about about-container'>
        <div className="left-about">
        <Image
        src={about1}
        alt="seo-hero"
        className='img-about'

        />
        </div>
        <div className="right-about">
            <h2>Optimized Business Solutions for Growth</h2>
            <p>Experience the power of bespoke SEO and SERM strategies meticulously crafted to propel your business forward. Our seasoned team combines deep industry knowledge with innovative approaches to deliver unparalleled results. From enhancing online visibility to optimizing customer engagement, we provide comprehensive business support tailored to your unique goals. Trust us to navigate the complexities of the digital landscape and drive sustainable growth for your enterprise.</p>
        </div>
        
        

    </div>
    </>
   
  )
}

export default page
