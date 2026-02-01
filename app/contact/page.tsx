import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white pb-24">
            <div className="min-h-screen bg-black text-white pb-24 pt-32">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Content */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Start a Conversation.
                            </h1>
                            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                Tell us about your project or idea, and let’s discuss.
                            </p>

                            <div className="space-y-6 text-zinc-500 text-sm">
                                <p>
                                    <strong className="text-white block mb-1">Email</strong>
                                    contact@atimis.in
                                </p>
                                <p>
                                    <strong className="text-white block mb-1">Location</strong>
                                    Remote / Global
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-zinc-900/20 border border-white/5 p-8 rounded-2xl">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
