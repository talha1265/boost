"use server"
import Blog from "../../../../models/blog";
import dbConnect from "../../../../utils/dbConn";
import { NextResponse } from "next/server";

// Handler function to handle DELETE requests
export async function DELETE(req, res) {
    try {
        // Get the blog ID from the request parameters
        const { id } = req.params;

        // Connect to the database
        await dbConnect();

        // Find the blog by ID and delete it
        await Blog.findByIdAndDelete(id);

        // Return a success message as JSON response
        return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
    } catch (error) {
        // If an error occurs, return a 500 status with an error message
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        );
    }
}


// Handler function to handle PUT requests
export async function PUT(req, res) {
    try {
        // Get the blog ID from the request parameters
        const { id } = req.params;
        // Get the updated blog data from the request body
        const updatedBlogData = req.body;

        // Connect to the database
        await dbConnect();

        // Find the blog by ID and update it with the new data
        await Blog.findByIdAndUpdate(id, updatedBlogData);

        // Return a success message with the updated blog data as JSON response
        return NextResponse.json({ message: "Blog updated successfully", data: updatedBlogData }, { status: 200 });
    } catch (error) {
        // If an error occurs, return a 500 status with an error message
        return NextResponse.json(
            { message: "Server error, p lease try again!" },
            { status: 500 }
        );
    }
}


// Handler function to handle GET requests
// export async function GET(req, res) {
//     try {
//         // Get the blog ID from the request parameters
//         const { id } = req.params;

//         // Connect to the database
//         await dbConnect();

//         // Find the blog by ID
//         const blog = await Blog.findById(id);

//         // If the blog is found, return it as JSON response
//         if (blog) {
//             return NextResponse.json({ data: blog }, { status: 200 });
//         } else {
//             // If the blog is not found, return a 404 status with a message
//             return NextResponse.json(
//                 { message: "Blog not found" },
//                 { status: 404 }
//             );
//         }
//     } catch (error) {
//         // If an error occurs, return a 500 status with an error message
//         return NextResponse.json(
//             { message: "Server error, please try again!" },
//             { status: 500 }
//         );
//     }
// }


// get a single course courses
export async function GET(request,{params:{id}}){
    try{
      // Connect to the database
      await dbConnect();
      //get the data using model
      const blog = await Blog.findOne({_id:id});
      return NextResponse.json(
          {
              message:"Ok",
              data:blog
          },
          {
              status:200
          }
          );
    }catch(error){
      return NextResponse.json(
          {
              message:"Failed To Fetch",
              error
          },
          {
              status:500
          }
      )
    }
  }
  