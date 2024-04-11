import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        subheading: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        date: {
          type: String,
          required: true,
      },
    },
    {
        timestamp: true,
    })

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)

export default  Blog;