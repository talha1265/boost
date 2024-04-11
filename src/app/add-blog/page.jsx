"use client"
import React, { useEffect, useState } from "react";
import "./page.css";





const AddBlog =  () => {

  const [user, setUser] = useState({
    title: "",
    subheading: "",
    description: "",
    image: "",
    date: ""
  });
  const [status, setStatus] = useState(null);
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };
  console.log(user);
  
const handleSubmit = async (e)=>{
  e.preventDefault();
     try {
      const response = await fetch('/api/blog' , {
        method:'POST',
        headers:{"Content_Type":"application/json"},
        body: JSON.stringify({
            title:user.title,
            subheading:user.subheading,
            description:user.description,
            image:user.image,
            date:user.date,
        })
    });

        // Set the status based on the response from the API route
        if (response.status === 200) {
          setUser({
              title: "",
              subheading: "",
              description: "",
              image: "",
              date: ""
          })
          setStatus('success');
      } else {
          setStatus('error');
      }
     } catch (error) {
      
     }
}



  return (
    <form onSubmit={handleSubmit} className="form-container">
  <input
    type="text"
    placeholder="Enter Blog Title"
     onChange={handleChange}
    value={user.title}
    className="form-input"
    name="title"
    id="blog_title"
    required
  />
  <input
    type="text"
    placeholder="Enter Subheading"
    onChange={handleChange}
    value={user.subheading}
    className="form-input"
    name="subheading"
    id="blog_subheading"

  />
  <textarea
    placeholder="Enter Blog Description"
    onChange={handleChange}
     value={user.description}
    className="form-textarea"
    name="description"
    id="blog_desc"
  ></textarea>
  <input
    type="file"
    onChange={handleChange}
    value={user.image}
    accept="image/*"
    className="form-file-input"
    name="image"
    id="blog_img"
  />
  <input
    type="date"
    onChange={handleChange}
     value={user.date}
    className="form-date-input"
    name="date"
    id="blog_date"
  />
  <div>
        {status === 'success' && <p>Thank you for your message!</p>}
        {status === 'error' && <p>There was an error submitting your message. Please try again.</p>}

  <button type="submit" className="form-submit-btn">Add Blog</button>
  </div>
  
</form>

  );
};

export default AddBlog;
