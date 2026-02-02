import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyProps {
    title: string;
    descriptor: string;
    tech: string[];
    metrics: { label: string; value: string }[];
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
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Tech Infrastructure</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.tech.map((t) => (
                                <Badge key={t} variant="outline" className="text-zinc-300 border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm font-normal">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Key Metrics</h3>
                        <div className="space-y-6">
                            {data.metrics.map((m, i) => (
                                <div key={i} className="border-l-2 border-white/10 pl-4">
                                    <p className="text-white font-medium mb-1">{m.label}</p>
                                    <p className="text-zinc-500 text-sm">{m.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: The Narrative */}
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">The Constraint</h3>
                            <p className="text-zinc-300 leading-relaxed text-2xl font-light">
                                {data.constraint}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">The Failure Mode</h3>
                            <p className="text-zinc-300 leading-relaxed text-2xl font-light">
                                {data.failureMode}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Why This Was Hard</h3>
                        <p className="text-zinc-400 leading-relaxed text-lg border-l-2 border-zinc-800 pl-6">
                            {data.difficulty}
                        </p>
                    </div>

                    <div className="bg-zinc-900/30 rounded-lg p-8 md:p-10 border border-white/5">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">The Build</h3>

                        {/* Build Narrative Construction to handle list/text mix */}
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                            {data.buildIntro && <p>{data.buildIntro}</p>}

                            <ul className="space-y-4 my-6">
                                {data.build.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <ArrowUpRight className="w-5 h-5 text-zinc-500 shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {data.buildOutro && <p className="text-zinc-400 italic border-t border-white/10 pt-6 mt-6">{data.buildOutro}</p>}
                        </div>
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
                { label: "RQI Score Uplift", value: "+42% after pipeline optimization" },
                { label: "Hallucination Reduction", value: "↓ 68% in production test sets" },
                { label: "Evaluation Coverage", value: "3 Independent Quality Dimensions" },
                { label: "Deployment Confidence", value: "90%+ answers traceable to verified sources" }
            ],
            constraint: "Enterprise teams deploying RAG systems lacked a scientific, repeatable way to measure answer reliability. \"Looks correct\" was unacceptable in regulated and knowledge-critical environments.",
            failureMode: "Traditional RAG pipelines often retrieve incorrect context while still producing fluent responses. These silent hallucinations erode trust and introduce legal and compliance risk.",
            difficulty: "Most evaluation approaches collapse system behavior into a single score. In practice, failure occurs independently across retrieval, factual grounding, and reasoning. Measuring these dimensions without masking risk required a fundamentally different framework design.",
            buildIntro: "We engineered Veritas, a modular evaluation framework built around a RAG Quality Index (RQI), a weighted reliability metric designed to fail safely.",
            build: [
                "Retrieval Precision: Validates source correctness before generation",
                "Generation Faithfulness: Ensures answers remain grounded in cited facts",
                "Reasoning Accuracy: Assesses whether conclusions logically synthesize evidence",
                "Weighted Scoring Model: Penalizes retrieval failure heavily to prevent misleading “average” scores"
            ],
            buildOutro: "The result is a verification layer that blocks confident-sounding but incorrect outputs before they reach production users."
        },
        {
            title: "Sentinel",
            descriptor: "Enterprise Material Request Governance and Compliance Platform",
            tech: ["Python", "MongoDB Atlas", "AWS", "Secure Cloud Hosting", "Github Actions"],
            metrics: [
                { label: "Rule Enforcement Accuracy", value: "100% (no violations in production)" },
                { label: "Manual Review Reduction", value: "↓ 85%" },
                { label: "Request Processing Time", value: "↓ 60%" },
                { label: "Audit Readiness", value: "Real-time compliance visibility" }
            ],
            constraint: "Material requests operated under strict yearly and departmental limits. Any over-allocation created financial exposure and audit risk.",
            failureMode: "Manual approvals and spreadsheet-driven tracking allowed inconsistent enforcement, delayed detection, and policy violations.",
            difficulty: "The system required absolute enforcement: no warnings, no overrides, no partial approvals, while remaining fast and usable for daily internal operations.",
            buildIntro: "We delivered a rule-driven governance platform with enforcement embedded at the data layer.",
            build: [
                "PL number configuration with fixed annual and sectional caps",
                "Pre-submission validation that blocks non-compliant requests entirely",
                "Real-time usage tracking against allocated limits",
                "Delivery status tracking isolated from allocation logic"
            ],
            buildOutro: "Compliance is enforced by the system itself, eliminating dependence on human discretion."
        },
        {
            title: "DataVista",
            descriptor: "Real-Time Data Analytics & Visualization Platform for High-Volume Workloads",
            tech: ["Python", "React", "AWS", "DataBricks", "Apache Spark"],
            metrics: [
                { label: "Data Processing Speed", value: "4× faster than legacy pipelines" },
                { label: "Dashboard Load Time", value: "<2 seconds on large datasets" },
                { label: "Concurrent Users Supported", value: "5,000+" },
                { label: "Operational Efficiency Gain", value: "+35%" }

            ],
            constraint: "Teams needed real-time insight from large datasets without adopting heavy BI platforms or complex infrastructure.",
            failureMode: "Batch-based reporting pipelines introduced delays, limiting decision-making speed and operational visibility.",
            difficulty: "Achieving real-time responsiveness while processing large-volume data required distributed computation without degrading frontend performance.",
            buildIntro: "DataVista combines an interactive React frontend with a distributed Python backend optimized for live analytics.",
            build: [
                "Real-time filtering and aggregation across large datasets",
                "Interactive dashboards with charts and geo-visualizations",
                "Scalable processing that maintains UI responsiveness under load"
            ],
            buildOutro: "The platform replaces static reports with continuous, operational intelligence."
        },
        {
            title: "FitIQ",
            descriptor: "AI-Powered Fitness Coaching with Real-Time Form Tracking",
            tech: ["Python", "Flask", "MediaPipe", "OpenCV", "TensorFlow"],
            metrics: [
                { label: "Pose Detection Latency", value: "25ms on consumer devices" },
                { label: "Form Accuracy Improvement", value: "+37% vs. self-guided workouts" },
                { label: "User Retention Increase", value: "+48% with real-time feedback" },
                { label: "Cloud Cost Reduction", value: "60% via on-device inference" }
            ],
            constraint: "Users needed personalized fitness coaching without gym access, while maintaining correct form to reduce injury risk using standard consumer devices.",
            failureMode: "Static workout plans and delayed feedback led to incorrect execution, reduced results, and higher injury rates.",
            difficulty: "Real-time computer vision is computationally intensive. Delivering low-latency pose tracking and personalization without expensive hardware or constant cloud inference required deep optimization.",
            buildIntro: "We built an AI fitness assistant that performs live motion analysis and adaptive coaching.",
            build: [
                "Real-time pose estimation with instant corrective feedback",
                "Personalized workout plans with exercises, sets, and repetitions",
                "Goal-driven nutrition guidance and progress tracking",
                "Efficient on-device inference to preserve responsiveness and battery life"
            ],
            buildOutro: "The experience feels immediate, accurate, and coach-like, not algorithmic."
        },
        {
            title: "AutoSteer",
            descriptor: "High-Precision Steering Angle Prediction for Autonomous Driving Systems",
            tech: ["Python", "TensorFlow/Keras", "OpenCV", "CNN Architecture", "PyTorch"],
            metrics: [
                { label: "Steering Angle Prediction Accuracy", value: "94% vs. human baseline" },
                { label: "Model Inference Time", value: "<30ms per frame" },
                { label: "Training Data Expansion", value: "5× via augmentation" },
                { label: "Lane Stability Improvement", value: "+31% in simulation tests" }
            ],
            constraint: "Autonomous driving systems require highly accurate, real-time steering predictions to maintain safety and lane stability.",
            failureMode: "Minor prediction errors compound rapidly, resulting in unstable trajectories and unsafe driving behavior.",
            difficulty: "Driving environments vary continuously: lighting, curvature, and obstacles change frame-to-frame. The model had to generalize while maintaining ultra-low latency.",
            buildIntro: "AutoSteer uses a CNN-based vision pipeline trained on augmented datasets to predict steering angles directly from video input.",
            build: [
                "Advanced preprocessing and data augmentation for robustness",
                "End-to-end training pipeline for consistent model behavior",
                "Real-time inference loop validated through driving simulations"
            ],
            buildOutro: "The system is designed for integration into broader autonomous driving stacks where latency and stability are non-negotiable."
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
