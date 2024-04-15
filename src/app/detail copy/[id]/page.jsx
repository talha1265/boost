import React from "react";
import data from "@/data/data";
import '../page.css';
import Image from 'next/image.js';

export default async function Page({ params: { id } }) {
  // Find the course object with the matching ID
  const detailBox = data.find(detailBox => detailBox.id === parseInt(id));

  // Check if the course object exists
  if (!detailBox) {
    return <div>Course not found</div>;
  }

  // Render the course details
  return (
    <div className="detail-container">
      <div className="detailed-content">
        <h1 className="top-heading">{detailBox.subheading}</h1>
        <div className="hero-detail">
          <div className="hero-img">
            <Image
              src={detailBox.img}
              alt="seo-hero"
              className='detail-img'
            />
          </div>
          <div className="hero-text">
            <h3>{detailBox.heading}</h3>
            <p>{detailBox.description}</p>
          </div>
        </div>
        <div className="detail-para">
          <p>{detailBox.para2}</p>
        </div>
      </div>
    </div>
  );
}
