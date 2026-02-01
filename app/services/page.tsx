import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto min-h-[3.5rem] flex items-center justify-center">
                        Specialized engineering for scalable systems.
                    </p>
                </div>
            </section>

            {/* Service List */}
            <section className="container mx-auto max-w-5xl px-6 pt-16 space-y-24 relative z-10">

                {/* Service 1: AI & RAG */}
                <div className="grid md:grid-cols-2 gap-12 items-start border-l border-white/10 pl-8 md:pl-12 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 to-transparent md:block hidden"></div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Enterprise AI & RAG Systems
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <div>
                                <strong className="text-zinc-200 block mb-1">Who this is for</strong>
                                CTOs deploying LLMs into regulated workflows where accuracy is non-negotiable.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">The Real Pain</strong>
                                Standard RAG pipelines hallucinate and lack auditability. You cannot put a probabilistic &quot;demo&quot; in front of enterprise customers who demand deterministic answers.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">What We Build</strong>
                                Deterministic retrieval systems. Strict citation enforcement. Air-gapped deployment capabilities. We replace opaque logic with observable reasoning steps.
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <strong className="text-zinc-200 block mb-1">Why this approach works</strong>
                                We treat LLMs as untrusted components, wrapping them in rigid validation layers. Safety comes from the architecture, not the model.
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {["LlamaIndex", "LangChain", "Qdrant", "Postgres (pgvector)", "vLLM", "Docker"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-black border border-zinc-800 rounded text-xs text-zinc-400 font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Service 2: Internal Tools */}
                <div className="grid md:grid-cols-2 gap-12 items-start border-l border-white/10 pl-8 md:pl-12 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 to-transparent md:block hidden"></div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Internal Tools & Process Automation
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <div>
                                <strong className="text-zinc-200 block mb-1">Who this is for</strong>
                                Operations leads drowning in spreadsheets and manual data entry that creates business risk.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">The Real Pain</strong>
                                Human error in critical workflows creates liability. Spreadsheets don&apos;t have type safety, access logs, or approval gates.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">What We Build</strong>
                                Enforced workflow engines. Systems that physically prevent valid-but-incorrect states. Multi-step approvals with immutable audit trails.
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <strong className="text-zinc-200 block mb-1">Why this approach works</strong>
                                We don&apos;t just digitize forms. We encode your business rules into the software schema, making compliance the path of least resistance.
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {["ReTool", "Next.js", "Temporal", "Supabase", "Prisma", "Zod"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-black border border-zinc-800 rounded text-xs text-zinc-400 font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Service 3: Backend & Data */}
                <div className="grid md:grid-cols-2 gap-12 items-start border-l border-white/10 pl-8 md:pl-12 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 to-transparent md:block hidden"></div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Backend, API & Data Platforms
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <div>
                                <strong className="text-zinc-200 block mb-1">Who this is for</strong>
                                Platforms hitting the limits of their MVP architecture.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">The Real Pain</strong>
                                Database locks, slow queries, and race conditions are killing user trust. You need to scale without rewriting everything from scratch.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">What We Build</strong>
                                High-throughput event queues. Idempotent API layers. Read-heavy caching strategies that don&apos;t serve stale data.
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <strong className="text-zinc-200 block mb-1">Why this approach works</strong>
                                Performance is a feature. We design for the 99th percentile latency, ensuring your system holds up under unpredictable load spikes.
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Go", "Rust", "Node.js", "Redis", "Kafka", "Postgres", "AWS", "Kubernetes"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-black border border-zinc-800 rounded text-xs text-zinc-400 font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Service 4: Computer Vision */}
                <div className="grid md:grid-cols-2 gap-12 items-start border-l border-white/10 pl-8 md:pl-12 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 to-transparent md:block hidden"></div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Applied Computer Vision
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <div>
                                <strong className="text-zinc-200 block mb-1">Who this is for</strong>
                                Physical operations requiring automated inspection or tracking.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">The Real Pain</strong>
                                Cloud APIs are too slow or expensive for real-time video. Hardware constraints in the field are brutal.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">What We Build</strong>
                                Edge-deployed inference models. Systems that run on limited compute. Robust handling of variable lighting and occlusion.
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <strong className="text-zinc-200 block mb-1">Why this approach works</strong>
                                We optimize for the edge. We shrink models without destroying accuracy, bringing intelligence to where the data is actually generated.
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {["OpenCV", "YOLOv8", "TensorRT", "CUDA", "Python", "C++"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-black border border-zinc-800 rounded text-xs text-zinc-400 font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <section className="container mx-auto max-w-5xl px-6 pt-32 text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to engineer a solution?</h2>
                <Link href="/contact">
                    <Button size="lg" className="text-base px-8 py-6 rounded-full bg-white text-black hover:bg-zinc-200">
                        Get Started
                    </Button>
                </Link>
            </section>
        </div>
    );
}
