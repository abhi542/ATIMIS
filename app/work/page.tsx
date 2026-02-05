"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MetricCounter } from "@/components/work/MetricCounter";
import { TechBadge } from "@/components/ui/TechBadge";

interface CaseStudyProps {
    title: string;
    descriptor: string;
    tech: string[];
    metrics: { label: string; value: string; detail: string }[];
    constraint: string;
    failureMode: string;
    difficulty: string;
    build: string[]; // Array for bullet points if needed, or paragraphs
    buildIntro?: string; // Optional intro text for build
    buildOutro?: string; // Optional outro text for build
}

const CaseStudy = ({ data, number }: { data: CaseStudyProps, number: string }) => {
    return (
        <div className="group border-t border-white/10 pt-16 md:pt-24 first:border-0 first:pt-0">
            <div className="flex flex-col mb-12 gap-4 pb-8 border-b border-white/10">
                <div className="space-y-4">
                    <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">0{number}</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{data.title}</h2>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light">{data.descriptor}</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                {/* Left Column: Tech & Metrics */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Tech Infrastructure</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.tech.map((t, i) => (
                                <TechBadge key={t} name={t} index={i} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8">Key Metrics</h3>
                        <div className="grid grid-cols-1 gap-8">
                            {data.metrics.map((m, i) => {
                                // Determine color based on content keywords for a "senior dev" automated touch
                                const isPositive = m.value.includes("+") || m.value.includes("↓") || m.value.includes("<") || m.label.includes("Accuracy") || m.label.includes("Score") || m.value.includes("100%");
                                const isNegative = m.value.includes("↑") && m.label.includes("Error");

                                const colorClass = isNegative ? "text-red-400" : isPositive ? "text-emerald-400" : "text-white";
                                const borderClass = isNegative ? "border-red-400/50" : isPositive ? "border-emerald-400/50" : "border-white/10";

                                return (
                                    <div key={i} className={`flex flex-col border-l-4 pl-6 py-1 ${borderClass} transition-colors duration-500`}>
                                        <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-2">{m.label}</span>
                                        <div className="flex flex-col">
                                            <MetricCounter
                                                value={m.value}
                                                className={`text-4xl md:text-5xl font-mono font-light tracking-tighter ${colorClass}`}
                                            />
                                            <span className="text-zinc-500 text-sm mt-1 leading-snug">{m.detail}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column: The Narrative */}
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-zinc-900/20 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
                                <span className="relative flex h-2 w-2 mr-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                                </span>
                                The Constraint
                            </h3>
                            <p className="text-zinc-300 leading-relaxed text-xl font-light">
                                {data.constraint}
                            </p>
                        </div>
                        <div className="bg-zinc-900/20 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
                                <span className="relative flex h-2 w-2 mr-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
                                </span>
                                The Failure Mode
                            </h3>
                            <p className="text-zinc-300 leading-relaxed text-xl font-light">
                                {data.failureMode}
                            </p>
                        </div>
                    </div>

                    <div className="bg-zinc-900/20 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
                            <span className="relative flex h-2 w-2 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                            </span>
                            Why This Was Hard
                        </h3>
                        <p className="text-zinc-300 leading-relaxed text-xl font-light">
                            {data.difficulty}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function WorkPage() {
    const caseStudies = [
        {
            title: "Veritas",
            descriptor: "Enterprise RAG Evaluation & Verification Framework for Production LLM Systems",
            tech: ["Python", "LangChain (LCEL)", "Vertex AI", "Gemini / OpenAI LLMs", "Google Cloud MCP"],
            metrics: [
                { label: "RQI Score Uplift", value: "+42%", detail: "after pipeline optimization" },
                { label: "Hallucination Reduction", value: "↓ 68%", detail: "in production test sets" },
                { label: "Evaluation Coverage", value: "3 Dimensions", detail: "Independent Quality Dimensions" },
                { label: "Deployment Confidence", value: "90%+", detail: "answers traceable to verified sources" }
            ],
            constraint: "Enterprise teams deploying RAG systems lacked a scientific, repeatable way to measure answer reliability. \"Looks correct\" was unacceptable in regulated and knowledge-critical environments.",
            failureMode: "Traditional RAG pipelines often retrieve incorrect context while still producing fluent responses. These silent hallucinations erode trust and introduce legal and compliance risk.",
            difficulty: "Most evaluation approaches collapse system behavior into a single score. In practice, failure occurs independently across retrieval, factual grounding, and reasoning. Measuring these dimensions without masking risk required a fundamentally different framework design.",
            buildIntro: "Initializing Veritas evaluation protocol...",
            build: [
                "Retrieval Precision: Validates source correctness before generation",
                "Generation Faithfulness: Ensures answers remain grounded in cited facts",
                "Reasoning Accuracy: Assesses whether conclusions logically synthesize evidence",
                "Weighted Scoring Model: Penalizes retrieval failure heavily"
            ],
            buildOutro: "Verification layer active. Confident-sounding errors blocked."
        },
        {
            title: "Sentinel",
            descriptor: "Enterprise Material Request Governance and Compliance Platform",
            tech: ["Python", "MongoDB Atlas", "AWS", "Secure Cloud Hosting", "Github Actions"],
            metrics: [
                { label: "Rule Enforcement Accuracy", value: "100%", detail: "(no violations in production)" },
                { label: "Manual Review Reduction", value: "↓ 85%", detail: "reduction in manual workload" },
                { label: "Request Processing Time", value: "↓ 60%", detail: "faster turnaround" },
                { label: "Audit Readiness", value: "100%", detail: "Real-time compliance visibility" }
            ],
            constraint: "Material requests operated under strict yearly and departmental limits. Any over-allocation created financial exposure and audit risk.",
            failureMode: "Manual approvals and spreadsheet-driven tracking allowed inconsistent enforcement, delayed detection, and policy violations.",
            difficulty: "The system required absolute enforcement: no warnings, no overrides, no partial approvals, while remaining fast and usable for daily internal operations.",
            buildIntro: "Loading Sentinel governance modules...",
            build: [
                "Injecting PL number configuration with fixed annual and sectional caps",
                "Validating pre-submission requests against rough-consensus rules",
                "Activating real-time telemetry for usage tracking",
                "Isolating delivery status from allocation logic"
            ],
            buildOutro: "Compliance enforcement active. Human discretion bypassed."
        },
        {
            title: "DataVista",
            descriptor: "Real-Time Data Analytics & Visualization Platform for High-Volume Workloads",
            tech: ["Python", "React", "AWS", "DataBricks", "Apache Spark"],
            metrics: [
                { label: "Data Processing Speed", value: "4×", detail: "faster than legacy pipelines" },
                { label: "Dashboard Load Time", value: "<2s", detail: "on large datasets" },
                { label: "Concurrent Users", value: "5,000+", detail: "supported concurrently" },
                { label: "Efficiency Gain", value: "+35%", detail: "operational efficiency" }

            ],
            constraint: "Teams needed real-time insight from large datasets without adopting heavy BI platforms or complex infrastructure.",
            failureMode: "Batch-based reporting pipelines introduced delays, limiting decision-making speed and operational visibility.",
            difficulty: "Achieving real-time responsiveness while processing large-volume data required distributed computation without degrading frontend performance.",
            buildIntro: "Spinning up DataVista distributed compute nodes...",
            build: [
                "Optimizing real-time filtering across sharded datasets",
                "Hydrating interactive dashboard visualization layer",
                "Balancing scalable processing load vs UI responsiveness"
            ],
            buildOutro: "Live analytics operational. Static reporting disabled."
        },
        {
            title: "FitIQ",
            descriptor: "AI-Powered Fitness Coaching with Real-Time Form Tracking",
            tech: ["Python", "Flask", "MediaPipe", "OpenCV", "TensorFlow"],
            metrics: [
                { label: "Pose Detection Latency", value: "25ms", detail: "on consumer devices" },
                { label: "Form Accuracy", value: "+37%", detail: "vs. self-guided workouts" },
                { label: "User Retention", value: "+48%", detail: "with real-time feedback" },
                { label: "Cloud Cost", value: "↓ 60%", detail: "via on-device inference" }
            ],
            constraint: "Users needed personalized fitness coaching without gym access, while maintaining correct form to reduce injury risk using standard consumer devices.",
            failureMode: "Static workout plans and delayed feedback led to incorrect execution, reduced results, and higher injury rates.",
            difficulty: "Real-time computer vision is computationally intensive. Delivering low-latency pose tracking and personalization without expensive hardware or constant cloud inference required deep optimization.",
            buildIntro: "Initializing FitIQ vision subsystem...",
            build: [
                "Calibrating real-time pose estimation kernels",
                "Generating personalized workout graph",
                "Syncing nutrition guidance modules",
                "Optimizing on-device inference for battery preservation"
            ],
            buildOutro: "AI Coach ready. Latency check: 25ms. Pass."
        },
        {
            title: "AutoSteer",
            descriptor: "High-Precision Steering Angle Prediction for Autonomous Driving Systems",
            tech: ["Python", "TensorFlow/Keras", "OpenCV", "CNN Architecture", "PyTorch"],
            metrics: [
                { label: "Steering Prediction", value: "94%", detail: "accuracy vs. human baseline" },
                { label: "Inference Time", value: "<30ms", detail: "per frame" },
                { label: "Training Data", value: "5×", detail: "expansion via augmentation" },
                { label: "Lane Stability", value: "+31%", detail: "improvement in simulation tests" }
            ],
            constraint: "Autonomous driving systems require highly accurate, real-time steering predictions to maintain safety and lane stability.",
            failureMode: "Minor prediction errors compound rapidly, resulting in unstable trajectories and unsafe driving behavior.",
            difficulty: "Driving environments vary continuously: lighting, curvature, and obstacles change frame-to-frame. The model had to generalize while maintaining ultra-low latency.",
            buildIntro: "Booting AutoSteer autonomous stack...",
            build: [
                "Preprocessing video feed for contrast normalization",
                "Engaging end-to-end CNN steering pipeline",
                "Running real-time inference loop"
            ],
            buildOutro: "System stable. Lane keep active."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white pb-32">
            {/* Meta Header */}
            <section className="pt-32 pb-16 px-6 border-b border-white/10 relative overflow-hidden text-center">
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
            <section className="container mx-auto max-w-5xl px-6 pt-24 space-y-24">
                {caseStudies.map((study, index) => (
                    <CaseStudy key={study.title} number={(index + 1).toString()} data={study} />
                ))}
            </section>

            {/* Final CTA */}
            <section className="mt-32 border-t border-white/10 py-24 px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to build something extraordinary?</h2>
                <Link href="/contact">
                    <div className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 transition-colors">
                        Start a Project
                    </div>
                </Link>
            </section>
        </div>
    );
}
