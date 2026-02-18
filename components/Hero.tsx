"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Profile } from "@prisma/client";

interface HeroProps {
    profile: Profile | null;
}

export function Hero({ profile }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-3xl opacity-20" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                        <Image
                            src="/profile.jpg"
                            alt={profile?.name || "Profile"}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-slate-100 leading-tight">
                        {profile?.headline || "Elevating Customer Experience through Empathy & Precision."}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
                        {profile?.title || "Customer Service Specialist & English Literature Scholar."}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/#experience"
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 group"
                        >
                            View Experience
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/#contact"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all border border-slate-700 hover:border-slate-600 flex items-center gap-2"
                        >
                            Contact Me
                            <Mail className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
            </motion.div>
        </section>
    );
}
