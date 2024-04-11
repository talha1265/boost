import Link from 'next/link'
import React from 'react'
import '../assets/css/components-css/TopHead.css'

const TopHead = ({aboutheading1,aboutheading2,serviceheading1,serviceheading2}) => {
   console.log(aboutheading1);
  return (
    <div>
       <div className="heading-service">

       {aboutheading1 && aboutheading2 && (
          <>
            <h2>{aboutheading1}</h2>
            <p>{aboutheading2}</p>
          </>
        )}
        {serviceheading1 && serviceheading2 && (
          <>
            <h2>{serviceheading1}</h2>
            <p>{serviceheading2}</p>
          </>
        )}
       {/* <h2>Made to Measure <span class="highlight">Services for</span> Your Growth</h2> */}

        <Link href="#" className='primary-btn'>Choose Us</Link>
       

      </div>
    </div>
  )
}

export default TopHead
