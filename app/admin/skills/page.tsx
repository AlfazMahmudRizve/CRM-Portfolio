
import { PrismaClient } from "@prisma/client";
import { createSkill, deleteSkill } from "@/lib/admin-actions";
import { Trash2, Plus } from "lucide-react";

const prisma = new PrismaClient();

export const revalidate = 0;

export default async function AdminSkillsPage() {
    const skills = await prisma.skill.findMany({ orderBy: { category: 'asc' } });

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-100">Manage Skills</h2>

            {/* Create New Skill Form */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 max-w-2xl">
                <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add New Skill
                </h3>
                <form action={createSkill} className="flex gap-4">
                    <input type="text" name="name" placeholder="Skill Name (e.g. React)" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 flex-1" />
                    <input type="text" name="category" placeholder="Category (e.g. Frontend)" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 flex-1" />

                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Add
                    </button>
                </form>
            </div>

            {/* List Existing Skills */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Group by category for display */}
                {Object.entries(skills.reduce((acc, skill) => {
                    (acc[skill.category] = acc[skill.category] || []).push(skill);
                    return acc;
                }, {} as Record<string, typeof skills>)).map(([category, categorySkills]) => (
                    <div key={category} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                        <h4 className="font-bold text-slate-200 border-b border-slate-700 pb-2 mb-3">{category}</h4>
                        <div className="space-y-2">
                            {categorySkills.map((skill) => (
                                <div key={skill.id} className="flex justify-between items-center group">
                                    <span className="text-slate-400">{skill.name}</span>
                                    <form action={deleteSkill.bind(null, skill.id)}>
                                        <button className="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
                                            <Trash2 className="w-3 h-3" />
                                        </button>
                                    </form>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
