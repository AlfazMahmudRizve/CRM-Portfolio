
import { siteConfig } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h4 className="text-lg font-serif font-bold text-slate-200 mb-2">
                        {siteConfig.name}
                    </h4>
                    <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                        {siteConfig.description}
                    </p>
                </div>

                <div className="text-slate-600 text-sm flex flex-col items-center md:items-end gap-1">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <p className="text-xs">
                        Designed & Built by <a href="https://whoisalfaz.me" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 font-medium transition-colors">Alfaz Mahmud Rizve</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
