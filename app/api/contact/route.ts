import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Inquiry from "@/models/Inquiry";

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        // Basic validation (Zod is used on client, this is a safety net)
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const inquiry = await Inquiry.create(body);

        // Send Email Notification
        try {
            const nodemailer = require("nodemailer");

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: "abhinavmbhatt@gmail.com",
                subject: `New Discovery Call Inquiry: ${body.name}`,
                text: `
Name: ${body.name}
Email: ${body.email}
Role: ${body.role}
Company: ${body.company || "N/A"}
Budget: ${body.budget}
Timeline: ${body.timeline || "N/A"}

Message:
${body.message}
            `,
            };

            const userConfirmationOptions = {
                from: process.env.EMAIL_USER,
                to: body.email,
                bcc: "abhinavmbhatt@gmail.com", // Admin gets a copy
                subject: "We received your inquiry - AantrrPantrr",
                html: `
<div style="font-family: sans-serif; color: #111; line-height: 1.6;">
    <p>Hi ${body.name.split(" ")[0]},</p>
    
    <p>Thank you for reaching out to us.</p>
    
    <p>We’ve received your request for a discovery call. Our engineering team reviews every inquiry carefully to understand the problem space and assess alignment before moving forward.</p>
    
    <p>Below are the details from your submission:</p>
    
    <ul style="padding-left: 20px;">
        <li><strong>Role:</strong> ${body.role}</li>
        <li><strong>Company:</strong> ${body.company || "N/A"}</li>
        <li><strong>Project overview:</strong><br>
        <span style="color: #444;">${body.message.replace(/\n/g, "<br>")}</span>
        </li>
        <li><strong>Timeline:</strong> ${body.timeline || "N/A"}</li>
        <li><strong>Estimated budget range:</strong> ${body.budget}</li>
    </ul>

    <p style="margin-top: 24px;">Within <strong>48 hours</strong>, our team will complete an initial evaluation and get back to you with next steps for a technical discussion.</p>
    
    <p>Thank you for considering AantrrPantrr. We look forward to reviewing your request.</p>
    
    <p style="margin-top: 32px;">Best regards,<br>
    <strong>Team AantrrPantrr</strong><br>
    <span style="color: #666; font-size: 0.9em;">Senior Engineering & AI Systems</span></p>
</div>
                `,
            };

            // Send both emails
            await Promise.all([
                transporter.sendMail(mailOptions),
                transporter.sendMail(userConfirmationOptions)
            ]);

            console.log("Admin notification and User confirmation sent");

        } catch (emailError) {
            console.error("Failed to send email:", emailError);
            // Continue - we don't want to fail the request just because email failed, 
            // as the data is already safe in MongoDB.
        }

        return NextResponse.json(
            { message: "Inquiry received", id: inquiry._id },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
