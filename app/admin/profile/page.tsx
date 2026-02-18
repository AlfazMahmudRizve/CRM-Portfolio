
import { getProfile, updateProfile } from "@/lib/admin-actions";

export const revalidate = 0;

export default async function EditProfilePage() {
    const profile = await getProfile();

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">Edit Profile</h2>

            <form action={updateProfile} className="space-y-6 bg-slate-800 p-8 rounded-xl border border-slate-700">

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={profile?.name}
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-sm font-medium text-slate-300">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            defaultValue={profile?.title}
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="headline" className="block text-sm font-medium text-slate-300">Headline</label>
                    <input
                        type="text"
                        name="headline"
                        id="headline"
                        defaultValue={profile?.headline || ""}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="bio" className="block text-sm font-medium text-slate-300">Bio</label>
                    <textarea
                        name="bio"
                        id="bio"
                        rows={4}
                        defaultValue={profile?.bio}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            defaultValue={profile?.email}
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            defaultValue={profile?.phone || ""}
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="linkedin" className="block text-sm font-medium text-slate-300">LinkedIn URL</label>
                    <input
                        type="text"
                        name="linkedin"
                        id="linkedin"
                        defaultValue={profile?.linkedin || ""}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="pt-4 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
