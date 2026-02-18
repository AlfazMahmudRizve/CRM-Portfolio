"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Education as EducationType } from "@prisma/client";

interface EducationProps {
    educations: EducationType[];
}

export function Education({ educations }: EducationProps) {
    return (
        <Section id="education" className="bg-slate-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-4">
                    Academic Foundation
                </h2>
                <div className="h-1 w-20 bg-indigo-600 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {educations.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <GraduationCap size={24} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-100 mb-2">
                            {edu.degree}
                        </h3>

                        <div className="text-lg text-indigo-400 mb-4">
                            {edu.institution}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                            <Calendar size={14} />
                            {edu.date}
                        </div>

                        <p className="text-slate-400 leading-relaxed">
                            {edu.details}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
