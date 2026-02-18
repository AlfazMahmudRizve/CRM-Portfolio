"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Profile } from "@prisma/client";

interface AboutProps {
    profile: Profile | null;
}

export function About({ profile }: AboutProps) {
    return (
        <Section id="about" className="bg-slate-950">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-6">
                        About Me
                    </h2>
                    <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                        {profile?.bio ? (
                            profile.bio.split('\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))
                        ) : (
                            <p>No bio available.</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -top-10 -left-10 text-indigo-900/30">
                        <Quote size={120} />
                    </div>
                    <blockquote className="relative z-10 text-2xl font-serif italic text-slate-300 border-l-4 border-indigo-600 pl-6 py-2">
                        &quot;Great service isn&apos;t just about solving problems—it&apos;s about making people feel heard, understood, and valued.&quot;
                    </blockquote>
                </motion.div>
            </div>
        </Section>
    );
}
