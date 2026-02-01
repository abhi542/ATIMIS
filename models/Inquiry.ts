import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInquiry extends Document {
    name: string;
    email: string;
    company?: string;
    role: string;
    message: string;
    budget: string;
    timeline?: string;
    createdAt: Date;
}

const InquirySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        company: { type: String },
        role: { type: String, required: true },
        message: { type: String, required: true }, // "What are you building?"
        budget: { type: String, required: true },
        timeline: { type: String },
    },
    { timestamps: true }
);

const Inquiry: Model<IInquiry> =
    mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);

export default Inquiry;
