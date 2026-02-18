
import { getEducations } from "@/lib/actions";
import { createEducation, deleteEducation } from "@/lib/admin-actions";
import { Trash2, Plus, GraduationCap } from "lucide-react";
import { Education } from "@prisma/client";

export const revalidate = 0;

export default async function AdminEducationPage() {
    const educations = await getEducations();

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-100">Manage Education</h2>

            {/* Create New Education Form */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add New Degree
                </h3>
                <form action={createEducation} className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="institution" placeholder="Institution Name" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />
                    <input type="text" name="degree" placeholder="Degree / Certification" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />

                    <input type="text" name="date" placeholder="Date / Year" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />
                    <input type="text" name="details" placeholder="Brief details about the program" required className="bg-slate-900 border border-slate-700 rounded px-4 py-2 text-slate-100 w-full" />

                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium md:col-span-2 transition-colors">
                        Add Education
                    </button>
                </form>
            </div>

            {/* List Existing Education */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-200">Existing Records</h3>
                {educations.map((edu: Education) => (
                    <div key={edu.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-slate-100">{edu.degree}</h4>
                            <p className="text-indigo-400 text-sm">{edu.institution}</p>
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                <GraduationCap className="w-3 h-3" />
                                {edu.date}
                            </p>
                        </div>
                        <form action={deleteEducation.bind(null, edu.id)}>
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
