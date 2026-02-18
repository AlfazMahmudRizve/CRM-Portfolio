
"use client";

import { Section } from "./ui/Section";
import { educationData } from "@/lib/data";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
    return (
        <Section id="education" className="bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-4">
                    Academic Background
                </h2>
                <div className="h-1 w-20 bg-indigo-600 mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-6 items-center bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-colors"
                    >
                        <div className="p-4 bg-indigo-600/10 rounded-full text-indigo-400">
                            <GraduationCap size={40} />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-100 mb-2">{edu.institution}</h3>
                            <p className="text-lg text-indigo-300 font-medium mb-2">{edu.degree}</p>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-sm mb-4">
                                <Calendar size={14} />
                                <span>{edu.date}</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                {edu.details}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
