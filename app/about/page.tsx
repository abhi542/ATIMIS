import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pb-24">
            {/* Header */}
            <section className="pt-32 pb-16 px-6 border-b border-white/10 text-center relative overflow-hidden">
                {/* Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none">
                    <h1 className="text-[15vw] md:text-[18vw] font-black text-white/5 tracking-tighter leading-none">
                        ATIMIS
                    </h1>
                </div>

                <div className="container mx-auto max-w-5xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How We Engineer</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto min-h-[3.5rem] flex items-center justify-center">
                        We learned these principles the hard way: by seeing clever systems fail in production.
                    </p>
                </div>
            </section>

            {/* Principles Grid */}
            <section className="container mx-auto max-w-5xl px-6 pt-16 relative z-10">

                <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

                    <div className="bg-black p-12 hover:bg-zinc-900/50 transition-colors">
                        <h2 className="text-2xl font-bold text-white mb-6">State-of-the-Art Technology.</h2>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            We leverage the modern infrastructure stack to give you a competitive edge. From RAG pipelines to edge-computing, we use the most powerful tools available to solve your specific challenges.
                        </p>
                    </div>

                    <div className="bg-black p-12 hover:bg-zinc-900/50 transition-colors">
                        <h2 className="text-2xl font-bold text-white mb-6">Observability is not optional.</h2>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            If we can&apos;t see it, we can&apos;t fix it. We structure services to emit structured logs and metrics. We want to know why a request failed before you do.
                        </p>
                    </div>

                    <div className="bg-black p-12 hover:bg-zinc-900/50 transition-colors">
                        <h2 className="text-2xl font-bold text-white mb-6">Built for Scale.</h2>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            We design systems that handle growth from day one. Modular, event-driven architectures that ensure your platform remains fast and reliable as your user base expands.
                        </p>
                    </div>

                    <div className="bg-black p-12 hover:bg-zinc-900/50 transition-colors">
                        <h2 className="text-2xl font-bold text-white mb-6">Strategic Partnership.</h2>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            We are your partners, not just execution hands. We will candidly advise if a requirement jeopardizes system stability. We care about the health of what we build.
                        </p>
                    </div>

                </div>

                <section className="mt-12 border-t border-white/10 py-16 px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Partner With Us?</h2>
                    <Link href="/contact">
                        <div className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 transition-colors">
                            Let's Talk
                        </div>
                    </Link>
                </section>
            </section>

        </div>

    );
}
