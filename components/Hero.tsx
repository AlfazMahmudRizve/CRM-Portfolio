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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Advanced Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-800/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-slate-800/30 rounded-full blur-[140px]" />
                <div className="absolute  inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </div>

            <div className="container px-4 md:px-8 lg:px-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Headline (Quote) & Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left space-y-8 order-2 lg:order-1"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 leading-[1.1]">
                            {profile?.headline || "Elevating Customer Experience through Empathy & Precision."}
                        </h1>

                        <div className="flex flex-col sm:flex-row items-start gap-5 pt-4">
                            <Link
                                href="/#experience"
                                className="group relative px-8 py-4 bg-indigo-600 text-white rounded-full font-medium overflow-hidden shadow-lg shadow-indigo-900/20 hover:shadow-indigo-600/40 transition-all duration-300 w-full sm:w-auto text-center"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                                <span className="relative flex items-center justify-center gap-2">
                                    View Experience
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link
                                href="/#contact"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-slate-200 rounded-full font-medium transition-all border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 w-full sm:w-auto text-center"
                            >
                                Contact Me
                                <Mail className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Image & Role */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 order-1 lg:order-2"
                    >
                        {/* Profile Image with Glow */}
                        <div className="relative group w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
                            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl ring-1 ring-white/10">
                                <Image
                                    src="/profile.jpg"
                                    alt={profile?.name || "Profile"}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Role / Subtitle */}
                        <div className="space-y-2 max-w-md">
                            <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto lg:ml-auto lg:mr-0 mb-4" />
                            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                                {profile?.title || "Customer Service Specialist & English Literature Scholar."}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-8 flex flex-col items-center gap-3 hidden lg:flex"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium rotate-90 origin-left translate-y-8 translate-x-3">Scroll</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-slate-600/0 via-slate-500 to-slate-600/0 overflow-hidden">
                    <div className="w-full h-1/2 bg-white/50 blur-[1px] animate-drop" />
                </div>
            </motion.div>
        </section>
    );
}
