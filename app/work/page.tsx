import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CheckCircle2, AlertTriangle, Layers } from "lucide-react";

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-black text-white pb-24">
            {/* Meta Header */}
            <section className="pt-32 pb-16 px-6 border-b border-white/10 text-center relative overflow-hidden">
                {/* Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none">
                    <h1 className="text-[15vw] md:text-[18vw] font-black text-white/5 tracking-tighter leading-none">
                        ATIMIS
                    </h1>
                </div>

                <div className="container mx-auto max-w-5xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Work</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto min-h-[3.5rem] flex items-center justify-center">
                        Production systems, running at scale.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="container mx-auto max-w-5xl px-6 pt-24 space-y-48 relative z-10">

                {/* Project 1: Enterprise RAG */}
                <div className="group">
                    <div className="flex items-baseline justify-between mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Project Alpha: Enterprise RAG</h2>
                        <span className="text-sm font-mono text-zinc-500">Q3 2024</span>
                    </div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                        <div className="space-y-6">
                            <div className="bg-zinc-900 border border-white/5 p-6 rounded-lg">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Tech Infrastructure</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "LangChain", "Pinecone", "Azure OpenAI", "React"].map(t => (
                                        <Badge key={t} variant="secondary" className="bg-black border-zinc-800 text-zinc-400">{t}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Key Metric</h3>
                                <p className="text-4xl font-bold text-white">0%</p>
                                <p className="text-sm text-zinc-500">Unflagged Hallucinations</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Constraint</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Client required 100% citation accuracy for legal document queries. &quot;Mostly right&quot; was unacceptable.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Failure Mode</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Standard vector search returned irrelevant context 15% of the time, creating liability.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Why This Was Hard</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Naive RAG pipelines optimize for &quot;finding something&quot;. We had to optimize for &quot;saying nothing&quot; if the confidence threshold wasn&apos;t met.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Build</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Implemented a two-stage hybrid search (keyword + semantic) with a graph-based verification step. If the model can&apos;t cite the source, it refuses to answer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Project 2: Compliance */}
                <div className="group">
                    <div className="flex items-baseline justify-between mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Project Beta: Compliance Governance</h2>
                        <span className="text-sm font-mono text-zinc-500">Q1 2025</span>
                    </div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                        <div className="space-y-6">
                            <div className="bg-zinc-900 border border-white/5 p-6 rounded-lg">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Tech Infrastructure</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Go", "Postgres RLS", "Temporal", "Terraform", "AWS"].map(t => (
                                        <Badge key={t} variant="secondary" className="bg-black border-zinc-800 text-zinc-400">{t}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Outcome</h3>
                                <p className="text-4xl font-bold text-white">2 Weeks</p>
                                <p className="text-sm text-zinc-500">To Pass Audit</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Constraint</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Fintech client needed to enforce multi-region data residency transparency.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Failure Mode</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Legacy monolith mixed user data across regions, violating GDPR/SOC2.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Build</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Decomposed the monolith into region-pinned services. Implemented row-level tenant isolation in Postgres. Added a CI/CD gate that blocks non-compliant schema changes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3: FitIQ */}
                <div className="group">
                    <div className="flex items-baseline justify-between mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Project Gamma: FitIQ</h2>
                        <span className="text-sm font-mono text-zinc-500">Q4 2024</span>
                    </div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                        <div className="space-y-6">
                            <div className="bg-zinc-900 border border-white/5 p-6 rounded-lg">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Tech Infrastructure</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["TensorFlow.js", "WebAssembly", "WebGL", "Next.js", "Edge"].map(t => (
                                        <Badge key={t} variant="secondary" className="bg-black border-zinc-800 text-zinc-400">{t}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Latency</h3>
                                <p className="text-4xl font-bold text-white">16ms</p>
                                <p className="text-sm text-zinc-500">Inference Time (60fps)</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Constraint</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Real-time pose estimation on consumer mobile devices with poor batteries.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Failure Mode</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Cloud inference introduced 500ms latency. Users abandoned the workout flow.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">The Build</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Quantized the pose model to run entirely on-device via WebAssembly. Removed the server dependency for the core loop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
