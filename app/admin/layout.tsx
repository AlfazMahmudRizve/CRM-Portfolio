
import Link from "next/link";
import { LayoutDashboard, FileText, User, Briefcase, Code, GraduationCap } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-900 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-800 border-r border-slate-700 hidden md:block">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-100 font-serif">Admin Panel</h2>
                </div>
                <nav className="px-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                    </Link>
                    <Link href="/admin/posts" className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                        <FileText className="w-4 h-4" />
                        Blog Posts
                    </Link>
                    <Link href="/admin/profile" className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                        <User className="w-4 h-4" />
                        Edit Profile
                    </Link>
                    <Link href="/admin/experience" className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                        <Briefcase className="w-4 h-4" />
                        Experience
                    </Link>
                    <Link href="/admin/skills" className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                        <Code className="w-4 h-4" />
                        Skills
                    </Link>
                    <Link href="/admin/education" className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                        <GraduationCap className="w-4 h-4" />
                        Education
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
