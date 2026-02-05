"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TechBadgeProps {
    name: string;
    index: number;
}

export function TechBadge({ name, index }: TechBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
        >
            <Badge
                variant="outline"
                className="text-zinc-300 border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm font-normal cursor-default hover:bg-zinc-800 hovered:border-zinc-700 transition-colors"
            >
                {name}
            </Badge>
        </motion.div>
    );
}
