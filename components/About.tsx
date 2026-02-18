
"use client";

import { Section } from "./ui/Section";
import { aboutContent } from "@/lib/data";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about" className="bg-slate-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-indigo-400">
                        {aboutContent.heading}
                    </h2>
                    <div className="h-1 w-20 bg-indigo-600 mb-8" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                        {aboutContent.bio}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700/50">
                        <blockquote className="text-xl font-serif italic text-slate-300">
                            "Integrating academic insights into professional interactions to enhance communication dynamics."
                        </blockquote>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
