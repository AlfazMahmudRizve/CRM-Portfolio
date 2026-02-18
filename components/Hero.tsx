
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { heroContent } from "@/lib/data";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16 md:pt-0">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-3xl opacity-20" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center md:text-left space-y-6 order-2 md:order-1"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-slate-100 leading-tight">
                            Elevating Customer Experience through <span className="text-indigo-500">Empathy</span> & <span className="text-indigo-500">Precision</span>.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-lg mx-auto md:mx-0 font-light">
                            {heroContent.subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 pt-4">
                            <Link
                                href="#experience"
                                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 group"
                            >
                                {heroContent.ctaPrimary}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all border border-slate-700 hover:border-slate-600 flex items-center gap-2"
                            >
                                {heroContent.ctaSecondary}
                                <Mail className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 md:order-2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                                <Image
                                    src="/profile.jpg"
                                    alt="Abu Zubayer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-xl">
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-indigo-500">3+</span>
                                    <span className="text-xs text-slate-400">Years Exp.</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest hidden md:block">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent hidden md:block" />
            </motion.div>
        </section>
    );
}

