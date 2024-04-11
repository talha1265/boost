import React, { useState } from 'react'
import Hero from './Hero.jsx'
import '../assets/css/components-css/section.css';

import Link from 'next/link';
import About from './About.jsx';
import Blog from './Blog.jsx';
import Banner from './Banner.jsx';
import Image from 'next/image.js';
import g1 from '../assets/images/4169292.jpg'
import g2 from '../assets/images/4782178.jpg'
import g3 from '../assets/images/4782264.jpg'
import g4 from '../assets/images/4967406.jpg'
import g5 from '../assets/images/6285106.jpg'
import g6 from '../assets/images/6595412.jpg'
import g7 from '../assets/images/7183465.jpg'
import data from '@/data/data.js';




const Section = () => {
console.log(data);
  return (
   <>
   
   <Hero/>
   <hr  className='container hr' />
   <div className="sercices">
    <div className="content">
      <div className="head">
      <h2>What We Do?</h2>
      <p>We offer comprehensive SEO and SEM services tailored to meet the unique needs and goals of our clients. Our team of experienced digital marketers is dedicated to helping businesses improve their online visibility, attract more organic traffic, and drive measurable results. Here's how we can help you:</p>
      
      </div>
      
    <div className="hservice">

      {
        data.map((box)=>{
          return(
            <>
            <div className="box"  key={box.id}>
          <h3>{box.heading}</h3>
          <Image
        src={box.img}
        alt="seo-hero"
        className='img'

        />
         <p>{box.paragraph}</p>
         <Link href={`/detail/${box.id}`} className='more'>More</Link>
        
        </div>
            </>
          )
        })
      }
        {/* <div className="box">
          <h3>Keyword Research</h3>
          <Image
        src={g4}
        alt="seo-hero"
        className='img'

        />
         <p>Identify valuable keywords aligned with your business goals and target audience.</p>
         <Link href="#" className='more'>More</Link>

        </div>
        <div className="box">
          <h3>Content Optimization</h3>
          <Image
        src={g1}
        alt="seo-hero"
        className='img'

        />
         <p> Optimize website content to improve relevance and visibility in search results.</p>
         <Link href="#" className='more'>More</Link>

        </div>
        <div className="box">
          <h3>Technical SEO</h3>
          <Image
        src={g7}
        alt="seo-hero"
        className='img'

        />
         <p>Optimize website structure and performance for improved search visibility.</p>
         <Link href="#" className='more'>More</Link>

        </div>
        <div className="box">
          <h3>Link Building</h3>
          <Image
        src={g3}
        alt="seo-hero"
        className='img'

        />
          <p>Build high-quality backlinks to enhance website authority and credibility.</p>
          <Link href="#" className='more'>More</Link>

        </div>
        <div className="box">
          <h3>Local SEO</h3>
          <Image
        src={g6}
        alt="seo-hero"
        className='img'

        />
          <p>Enhance local visibility, attract customers, and dominate search rankings locally.</p>
          <Link href="#" className='more'>More</Link>

        </div>
        <div className="box">
          <h3>PPC Advertising</h3>
          <Image
        src={g5}
        alt="seo-hero"
        className='img'

        />
          <p>Targeted campaigns, maximize ROI, drive qualified traffic, ad optimization.</p>
          <Link href="#" className='more'>More</Link>

        </div>
        <div className="box">
          <h3>Display Ads</h3>
          <Image
        src={g2}
        alt="seo-hero"
        className='img'

        />
          <p>Monitor metrics, refine strategies for optimal Google, YouTube, Facebook Ads.</p>
          <Link href="#"  className='more'>More</Link>

        </div> */}
      </div>
     
    </div>
   
   </div>
   
   <hr  className='container hr' />

   <About/>
   <hr  className='container hr' />
   <Blog/>
   <hr  className='container hr' />
   <Banner/>
   </>
  )
}

export default Section
