"use server"
import Blog from "../../../models/blog";
import dbConnect from "../../../utils/dbConn";
import { NextResponse } from "next/server";


export async function POST(req,res) {
    try {
        const body =  await req.json();
        console.log(body);
        
        await dbConnect();

        await Blog.create(body);

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
        
    }
}


// Handler function to handle GET requests
export async function GET(req, res) {
    try {
        // Connect to the database
        await dbConnect();

        // Fetch all blogs from the database
        const blogs = await Blog.find({});

        // Return the list of blogs as a JSON response
        return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
        // If an error occurs, return a 500 status with an error message
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        );
    }
}