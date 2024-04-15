import React from "react";
import blog from "@/data/blog";
import "../page.css"
import Image from 'next/image.js';

export default async function Page({ params: { id } }) {

  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(false);
  // // Find the course object with the matching ID

  // useEffect(() => {
  //   // Fetch blogs data from API
  //   const fetchBlogs = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch('/api/blog');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setBlogs(data);
  //       } else {
  //         console.error('Failed to fetch blogs');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching blogs:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  // console.log(blogs);

  const detailBlog = blog.find(detailBlog => detailBlog.id === parseInt(id));

  // Check if the course object exists
  if (!detailBlog) {
    return <div>Course not found</div>;
  }

  // Render the course details
  return (
    <div className="detail-container">
      <div className="detailed-content">
        <h1 className="top-heading">{detailBlog.heading}</h1>
        <div className="hero-detail">
          <div className="hero-img">
            <Image
              src={detailBlog.img}
              alt="seo-hero"
              className='detail-img'
            />
          </div>
          <div className="hero-text">
            <h3>{detailBlog.para}</h3>
            <p>{detailBlog.desc1}</p>
            
          </div>
        </div>
        <div className="detail-para">
        <p>{detailBlog.desc2}</p>
        </div>
      </div>
    </div>
  );
}
