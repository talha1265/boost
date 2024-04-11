import React from 'react'
import '@/assets/css/add-blog.css';

const page = () => {
  return (
   <div className="conatiner">
     <form className="form" >
        <div className="form-group">
          <label htmlFor="heading" className="label">Heading:</label>
          <input 
            type="text" 
            id="heading" 
            name="heading" 
            // value={formData.heading} 
            // onChange={handleChange} 
            className="input" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="label">Image URL:</label>
          <input 
             type="file" 
            id="image" 
            name="image" 
            // value={formData.image} 
            // onChange={handleChange} 
            className="input" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="paragraph" className="label">Paragraph:</label>
          <textarea 
            id="paragraph" 
            name="paragraph" 
            // value={formData.paragraph} 
            // onChange={handleChange} 
            className="textarea" 
            required 
          />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
   </div>
  )
}

export default page
