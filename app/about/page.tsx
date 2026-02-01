import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pb-24">
            <section className="pt-24 pb-24 px-6 container mx-auto max-w-5xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">How We Engineer</h1>
                    <p className="text-xl text-zinc-400">
                        We learned these principles the hard way: by seeing clever systems fail in production.
                    </p>
                </div>

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

                <div className="mt-24 pt-12 border-t border-white/10">
                    <Link href="/contact">
                        <Button className="bg-white text-black hover:bg-zinc-200 font-semibold px-8 py-6 rounded-full" size="lg">
                            Get Started
                        </Button>
                    </Link>
                </div>

            </section>
        </div>
    );
}
