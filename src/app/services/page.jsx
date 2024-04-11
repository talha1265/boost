import React from 'react'
import './page.css'
import Image from 'next/image'
import g1 from '../../assets/images/4169292.jpg'
import g2 from '../../assets/images/4782178.jpg'
import g3 from '../../assets/images/4782264.jpg'
import g4 from '../../assets/images/4967406.jpg'
import g5 from '../../assets/images/6285106.jpg'
import g6 from '../../assets/images/6595412.jpg'
import g7 from '../../assets/images/7183465.jpg'
import serviceImage from '../../assets/images/service-img.jpg'
import Link from 'next/link'
import TopHead from '@/components/TopHead'



const page = () => {

  const heading1 = "Made to Measure Services for Your Growth";
  const heading2 = "Customized Solutions Propelling Your Business to Success"


  return (
    <>
    <div className="service-content">
    <TopHead  serviceheading1={heading1} serviceheading2={heading2} />
    </div>
   
   
    <div className='services'>
     
      <div className="services-block">
        <div className="service">
          <div className="left-box">
          <Image
        src={serviceImage}
        alt="seo-hero"
        className='s-img'

        />
          </div>
          <div className="right-box">
            <h2>Driving Innovation in SEO and SERM</h2>
            <p>At Brand Boost, our dedicated team of research and development professionals is committed to pushing the boundaries of SEO excellence. With a relentless pursuit of innovation, data-driven strategies, and a collaborative culture, we stand ready to empower your business to thrive in the digital age. Partner with us and experience the difference of a team truly dedicated to driving your success.</p>
          </div>

        </div>
        <div className="service margin-block ">
    <div className="left-box box-2">
        <h2>We Are Here to Help You</h2>
        <ul>
            <li>
                <strong>Better Keyword Research:</strong> Conducting in-depth research to find the most effective keywords for your business.
            </li>
            <li>
                <strong>Content Optimization:</strong> Optimizing your content for improved visibility and search engine rankings.
            </li>
            <li>
                <strong>Technical SEO:</strong> Handling technical aspects to enhance your website's performance and accessibility.
            </li>
            <li>
                <strong>Link Building:</strong> Developing quality backlinks to increase your website's authority and traffic.
            </li>
            <li>
                <strong>Local SEO:</strong> Optimizing your online presence to attract local customers and dominate local search results.
            </li>
            <li>
                <strong>PPC Advertising:</strong> Creating and managing PPC campaigns to drive targeted traffic to your website.
            </li>
            <li>
                <strong>Display Ads:</strong> Designing and implementing effective display ad campaigns to increase brand awareness.
            </li>
        </ul>
    </div>
    <div className="right-box box-3">
        <Image
            src={serviceImage}
            alt="seo-hero"
            className='s-img'
        />
    </div>
</div>


        {/* <hr className='container service-hr'/> */}
        .
      </div>
    </div>
    </>
  )
}

export default page
