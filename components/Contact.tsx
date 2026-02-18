import { Section } from "./ui/Section";
import { Mail, Linkedin, Phone } from "lucide-react";
import { Profile } from "@prisma/client";

interface ContactProps {
    profile: Profile | null;
}

export function Contact({ profile }: ContactProps) {
    return (
        <Section id="contact" className="bg-slate-900 border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Whether you have a question about my experience or want to discuss ensuring customer satisfaction, I&apos;m here to chat.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <a
                        href={`mailto:${profile?.email}`}
                        className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-700 transition-all group"
                    >
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-medium text-slate-100 mb-1">Email</h3>
                        <p className="text-sm text-slate-400">{profile?.email}</p>
                    </a>

                    <a
                        href={profile?.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-700 transition-all group"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </div>
                        <h3 className="font-medium text-slate-100 mb-1">LinkedIn</h3>
                        <p className="text-sm text-slate-400">Connect with me</p>
                    </a>

                    <div className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-700 transition-all group cursor-default">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-medium text-slate-100 mb-1">Phone</h3>
                        <p className="text-sm text-slate-400">{profile?.phone}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
