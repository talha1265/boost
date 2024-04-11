"use client";
import React, { useEffect, useState } from 'react';
import "./page.css";

const UpdateBlogPage = ({ params }) => {
    const { id } = params;
    const [updatedBlog, setUpdatedBlog] = useState({
        id: id,
        title: '',
        subheading: '',
        description: '',
        image: null, // Initially set to null
        date: ''
    });
    const [status, setStatus] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch blog data using the provided ID
                const response = await fetch(`/api/blog/${id}`);
                if (response.ok) {
                    const blogData = await response.json();
                    setUpdatedBlog(blogData.data);
                } else {
                    setStatus('error');
                }
            } catch (error) {
                console.error('Error fetching blog data:', error);
                setStatus('error');
            }
        };
  
        if (id) {
            fetchData();
        }
    }, [id]);
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBlog((prevBlog) => ({
            ...prevBlog,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first file from the input
        setUpdatedBlog((prevBlog) => ({
            ...prevBlog,
            image: file // Assign the file to the image property
        }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(); // Create a FormData object
            // Append all data to the FormData
            Object.entries(updatedBlog).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(`/api/blog/${updatedBlog.id}`, {
                method: 'PUT',
                body: formData // Send the FormData object as the body
            });
  
            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            setStatus('error');
        }
    };
  
    return (
        <form onSubmit={handleSubmit} className="form-container">
        <input
            type="text"
            placeholder="Enter Blog Title"
            onChange={handleChange}
            value={updatedBlog.title}
            className="form-input"
            name="title"
            required
        />
        <input
            type="text"
            placeholder="Enter Subheading"
            onChange={handleChange}
            value={updatedBlog.subheading}
            className="form-input"
            name="subheading"
        />
        <textarea
            placeholder="Enter Blog Description"
            onChange={handleChange}
            value={updatedBlog.description}
            className="form-textarea"
            name="description"
        ></textarea>
        <input
            type="file"
            accept="image/*"
            className="form-file-input"
            name="image"
            onChange={handleImageChange}
        />
        {updatedBlog.image && (
            <p>{updatedBlog.image.name}</p>
        )}
        <input
            type="date"
            onChange={handleChange}
            value={updatedBlog.date}
            className="form-date-input"
            name="date"
        />
        <div>
            {status === 'success' && <p>Blog updated successfully!</p>}
            {status === 'error' && <p>There was an error updating the blog. Please try again.</p>}
        </div>
        <button type="submit" className="form-submit-btn">Update Blog</button>
    </form>
    
    );
};

export default UpdateBlogPage;
