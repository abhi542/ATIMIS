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
                host: process.env.SMTP_HOST || "smtp.hostinger.com",
                port: parseInt(process.env.SMTP_PORT || "465"),
                secure: true, // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const userConfirmationOptions = {
                from: process.env.EMAIL_USER,
                to: body.email,
                bcc: process.env.ADMIN_EMAIL, // Admin gets a hidden copy
                subject: "We’ve received your inquiry — ATIMIS",
                html: `
<div style="font-family: sans-serif; color: #111; line-height: 1.6;">
    <p>Hi <strong>${body.name.split(" ")[0]}</strong>,</p>
    
    <p>Thanks for reaching out to <strong>ATIMIS.</strong></p>
    
    <p>We’ve received your request for a <strong>discovery call</strong>. Our team will review the details you shared to better understand your requirements and assess the best way forward.</p>
    
    <p><strong>Your submission summary</strong></p>
    
    <p>
    <strong>Role:</strong> ${body.role}<br>
    <strong>Company:</strong> ${body.company || "N/A"}
    </p>

    <p><strong>Project overview:</strong><br>
    ${body.message.replace(/\n/g, "<br>")}</p>

    <p>
    <strong>Timeline:</strong> ${body.timeline || "N/A"}<br>
    <strong>Estimated budget range:</strong> ${body.budget}
    </p>

    <p style="margin-top: 24px;">Within <strong>48 hours</strong>, we’ll complete an <strong>initial evaluation</strong> and get back to you with <strong>next steps for a technical discussion</strong>.</p>
    
    <p>Thank you for considering <strong>ATIMIS</strong>. We look forward to continuing the conversation.</p>
    
    <p style="margin-top: 32px;">Best regards,</p>
    
    <div style="margin-top: 16px;">
        <img src="cid:signature" alt="Team ATIMIS" style="max-width: 100%; height: auto; border: 0;">
    </div>
</div>
                `,
                attachments: [
                    {
                        filename: 'signature.png',
                        path: 'https://www.atimis.in/atimis_email_signature.png',
                        cid: 'signature',
                        contentDisposition: 'inline',
                        contentType: 'image/png'
                    }
                ]
            };

            // Send email
            await transporter.sendMail(userConfirmationOptions);

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
