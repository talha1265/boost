import mongoose from "mongoose";

// Define the schema for the contact model
const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        whatsapp_no: {
            type: Number,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // Fixing the typo, it should be timestamps instead of timestamp
    }
);

// Define the model for the contact schema
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
