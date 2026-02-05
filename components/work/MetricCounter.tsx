"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface MetricCounterProps {
    value: string;
    className?: string;
}

export function MetricCounter({ value, className }: MetricCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // Extract number and non-number parts
    const numberMatch = value.match(/[\d\.]+/);
    const number = numberMatch ? parseFloat(numberMatch[0]) : 0;

    // Characters before and after the number (e.g. "+", "%", "↓")
    const prefix = value.substring(0, value.indexOf(numberMatch ? numberMatch[0] : ""));
    const suffix = value.substring((value.indexOf(numberMatch ? numberMatch[0] : "") || 0) + (numberMatch ? numberMatch[0].length : 0));

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        mass: 1,
        stiffness: 75,
        damping: 25, // Slower, smoother spring
    });

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(number);
        }
    }, [isInView, number, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            // Determine decimal places based on original string
            const decimals = numberMatch?.[0].includes(".")
                ? numberMatch[0].split(".")[1].length
                : 0;

            setDisplayValue(parseFloat(latest.toFixed(decimals)));
        });
    }, [springValue, numberMatch]);

    // If no number found, just return static text
    if (!numberMatch) {
        return <span className={className}>{value}</span>;
    }

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue}
            {suffix}
        </span>
    );
}
