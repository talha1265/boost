import React from 'react';
import Cards from './Cards.jsx';
import '../assets/css/components-css/blog.css';
import blog from '@/data/blog.js';


const Blog = () => {
  const blogData = blog;

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
