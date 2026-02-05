"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemLogProps {
    steps: string[];
    intro?: string;
    outro?: string;
    className?: string;
}

export function SystemLog({ steps, intro, outro, className }: SystemLogProps) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20%" });
    const [activeStep, setActiveStep] = useState(-1);

    useEffect(() => {
        if (isInView) {
            // Start animation sequence
            const timeout = setTimeout(() => {
                setActiveStep(0);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isInView]);

    useEffect(() => {
        if (activeStep >= 0 && activeStep < steps.length) {
            const timeout = setTimeout(() => {
                setActiveStep((prev) => prev + 1);
            }, 800); // Time between steps
            return () => clearTimeout(timeout);
        }
    }, [activeStep, steps.length]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "rounded-lg overflow-hidden border border-white/10 bg-black/80 backdrop-blur-sm font-mono text-sm relative",
                className
            )}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-zinc-500" />
                    <span className="text-zinc-500 text-xs">system_log.sh</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-4">
                {intro && (
                    <div className="text-zinc-400 mb-6 border-b border-white/5 pb-4">
                        <span className="text-green-500 mr-2">❯</span>
                        {intro}
                    </div>
                )}

                <div className="space-y-3">
                    {steps.map((step, index) => (
                        <LogLine
                            key={index}
                            text={step}
                            status={
                                index < activeStep
                                    ? "completed"
                                    : index === activeStep
                                        ? "processing"
                                        : "waiting"
                            }
                        />
                    ))}
                </div>

                {outro && activeStep >= steps.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 pt-4 border-t border-white/5 text-green-400 font-semibold"
                    >
                        <span className="mr-2">✓</span>
                        {outro}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

function LogLine({
    text,
    status,
}: {
    text: string;
    status: "waiting" | "processing" | "completed";
}) {
    return (
        <div
            className={cn(
                "flex items-start gap-3 transition-colors duration-300",
                status === "waiting" ? "opacity-30" : "opacity-100"
            )}
        >
            <div className="mt-0.5 shrink-0 w-4">
                {status === "processing" && (
                    <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                )}
                {status === "completed" && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <Check className="w-4 h-4 text-green-500" />
                    </motion.div>
                )}
                {status === "waiting" && (
                    <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full ml-1 mt-1.5" />
                )}
            </div>
            <span
                className={cn(
                    status === "processing" ? "text-blue-300" : "text-zinc-300"
                )}
            >
                {text}
            </span>
        </div>
    );
}
