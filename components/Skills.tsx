"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

interface SkillsProps {
    skillsData: { category: string; items: string[] }[];
}

export function Skills({ skillsData }: SkillsProps) {
    return (
        <Section id="skills" className="bg-slate-900">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-4">
                    Core Competencies
                </h2>
                <div className="h-1 w-20 bg-indigo-600 mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto">
                {skillsData.map((category, idx) => (
                    <div key={idx} className="mb-12">
                        <h3 className="text-xl font-semibold text-slate-400 mb-6 text-center">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {category.items.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-200 font-medium hover:border-indigo-500 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-indigo-500/10 transition-all cursor-default"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
