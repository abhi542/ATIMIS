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
                <div className="absolute top-[145] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none">
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
                                Engineering teams deploying LLMs into regulated workflows where accuracy is non-negotiable.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">The Challenge</strong>
                                Probabilistic models in precision-driven industries create liability. Standard RAG pipelines lack the auditability required for enterprise regulatory standards.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">What We Build</strong>
                                Deterministic retrieval systems with strict citation enforcement. Air-gapped deployment capable. We replace opaque logic with observable reasoning steps.
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <strong className="text-zinc-200 block mb-1">Why this approach works</strong>
                                We treat LLMs as untrusted components, wrapping them in rigid validation layers. Reliability comes from the system architecture, ensuring safety by design.
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
                                Operations teams managing critical data workflows and business requirements.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">The Challenge</strong>
                                Manual data entry and spreadsheet management introduce human error and liability risks. Critical processes lack type safety and access controls.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">What We Build</strong>
                                Enforced workflow engines with type-safe state management. Multi-step approval systems with immutable audit trails to prevent invalid states.
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <strong className="text-zinc-200 block mb-1">Why this approach works</strong>
                                We encode business rules directly into the software schema. Compliance becomes the path of least resistance, reducing operational risk by design.
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {["ReTool", "Next.js", "Temporal", "Supabase", "Prisma", "Zod"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-black border border-zinc-800 rounded text-xs text-zinc-400 font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div> */}
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
                                Scale-ups where initial architectural choices have become growth bottlenecks.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">The Challenge</strong>
                                Racing conditions, database locks, and slow queries degrade user trust. Scaling requires architectural precision, not just more resource allocation.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">What We Build</strong>
                                High-throughput event queues and idempotent API layers. Read-heavy caching strategies ensuring data consistency under load.
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <strong className="text-zinc-200 block mb-1">Why this approach works</strong>
                                We design for predictable latency at scale. Your system remains stable and responsive even during unpredictable usage spikes.
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Go", "Rust", "Node.js", "Redis", "Kafka", "Postgres", "AWS", "Kubernetes"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-black border border-zinc-800 rounded text-xs text-zinc-400 font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div> */}
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
                                Industrial or logistics sites where manual visual inspection creates margin for error.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">The Challenge</strong>
                                Cloud APIs often fail on latency and cost for real-time video. Hardware constraints in the field require efficient, local processing.
                            </div>
                            <div>
                                <strong className="text-zinc-200 block mb-1">What We Build</strong>
                                Edge-deployed inference models optimized for limited compute. Robust systems handling variable lighting and occlusion in real-time.
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <strong className="text-zinc-200 block mb-1">Why this approach works</strong>
                                We bring intelligence to the data source. Optimization for the edge ensures accuracy without reliance on unstable connectivity.
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
