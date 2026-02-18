
"use client";

import { Section } from "./ui/Section";
import { experienceData } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceTimeline() {
    return (
        <Section id="experience" className="bg-slate-900">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-4">
                    Professional Journey
                </h2>
                <div className="h-1 w-20 bg-indigo-600 mx-auto" />
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2" />

                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative mb-12 md:mb-24 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            } items-center w-full`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-slate-900 transform -translate-x-2 md:-translate-x-1/2 mt-1.5 md:mt-0" />

                        {/* Content Card */}
                        <div className="ml-8 md:ml-0 w-full md:w-[calc(50%-2rem)] p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-indigo-500/30 transition-colors">
                            <div className="flex flex-col gap-2 mb-4">
                                <span className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium">
                                    <Calendar size={14} />
                                    {exp.date}
                                </span>
                                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                <div className="text-slate-400 font-medium">
                                    {exp.company}
                                </div>
                                {exp.client && (
                                    <div className="text-sm text-slate-500 italic">
                                        Client: {exp.client}
                                    </div>
                                )}
                            </div>

                            <p className="text-slate-300 mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="border-t border-slate-700/50 pt-4 mt-4">
                                <p className="text-sm text-slate-400">
                                    <strong className="text-indigo-400">Impact: </strong>
                                    {exp.impact}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-slate-700/50 text-xs text-slate-300 rounded-md border border-slate-600/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
