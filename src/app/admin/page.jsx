"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import './page.css'

const AdminDashboardPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

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

//   console.log(blogs);

  const handleDelete = async (id) => {
    // Send DELETE request to delete the blog with the given id
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted blog from the state
        setBlogs(blogs.filter((blog) => blog.id !== id));
      } else {
        console.error('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleUpdate = (id) => {
    window.location.href = `/update_blog/${id}`;
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
                
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>
                  <button onClick={() => handleUpdate(blog._id)}>Update</button>
                  <button onClick={() => handleDelete(blog._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboardPage;
