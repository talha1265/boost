"use server"
import Contact from "../../../models/contact";
import dbConnect from "../../../utils/dbConn";
import { NextResponse } from "next/server";


export async function POST(req,res) {
    try {
        const body =  await req.json();
        console.log(body);
        
        await dbConnect();

        await Contact.create(body);

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