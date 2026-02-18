
"use client";

import { Section } from "./ui/Section";
import { contactData, siteConfig } from "@/lib/data";
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-slate-900 mb-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-6">
                    {contactData.heading}
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                    {contactData.text}
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Email */}
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-800/80 transition-all group flex flex-col items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-indigo-600/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-600/20 transition-colors">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-200">Email</h3>
                        <p className="text-slate-400 text-sm">{siteConfig.email}</p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-800/80 transition-all group flex flex-col items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-indigo-600/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-600/20 transition-colors">
                            <Linkedin size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-200">LinkedIn</h3>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                            <span>Connect Profile</span>
                            <ArrowUpRight size={14} />
                        </div>
                    </a>

                    {/* Phone */}
                    <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-200">Phone</h3>
                        <p className="text-slate-400 text-sm">{siteConfig.phone}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
