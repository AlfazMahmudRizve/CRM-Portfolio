
import { getExperiences } from "@/lib/actions";
import { createExperience, deleteExperience } from "@/lib/admin-actions";
import { Trash2, Plus, Calendar } from "lucide-react";
import { Experience } from "@prisma/client";

export const revalidate = 0;

export default async function AdminExperiencePage() {
    const experiences = await getExperiences();

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-100">Manage Experience</h2>

            {/* Create New Experience Form */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add New Role
                </h3>
                <form action={createExperience} className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="role" placeholder="Role / Job Title" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />
                    <input type="text" name="company" placeholder="Company Name" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />

                    <div className="flex gap-2">
                        <input type="text" name="startDate" placeholder="Start Date (e.g. Jan 2023)" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />
                        <input type="text" name="endDate" placeholder="End Date (or blank)" className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />
                    </div>

                    <input type="text" name="impact" placeholder="Key Impact/Metric" className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />

                    <textarea name="description" placeholder="Job Description" required rows={3} className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full md:col-span-2" />

                    <input type="text" name="skills" placeholder="Skills (comma separated, e.g. React, Node.js)" className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full md:col-span-2" />

                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium md:col-span-2 transition-colors">
                        Add Experience
                    </button>
                </form>
            </div>

            {/* List Existing Experience */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-200">Existing Roles</h3>
                {experiences.map((exp: Omit<Experience, "skills"> & { skills: string[] }) => (
                    <div key={exp.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-slate-100">{exp.role}</h4>
                            <p className="text-indigo-400 text-sm">{exp.company}</p>
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {exp.startDate} - {exp.endDate || "Present"}
                            </p>
                        </div>
                        <form action={deleteExperience.bind(null, exp.id)}>
                            <button className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}
