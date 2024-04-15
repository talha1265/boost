import React, { useEffect, useState } from 'react';
import Cards from './Cards.jsx';
import '../assets/css/components-css/blog.css';
import blog from '@/data/blog.js';


const Blog = () => {
  const blogData = blog;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  // Find the course object with the matching ID

  useEffect(() => {
    // Fetch blogs data from API
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  console.log(blogs);

  console.log(blogData);
  return (
    <div className="blog ">
      <h2>Our Latest Blogs</h2>
      <p>Explore our latest articles on digital marketing or SEO trends, tips, and insights in 2024.</p>
      <div className="blog-cards ">
       {
        blogData.map((item) => {
          console.log(item);
          return <Cards key={item.id} data={item} />
       })
      }
      </div>
    </div>
  );
};

export default Blog;
