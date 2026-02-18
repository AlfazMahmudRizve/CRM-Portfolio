
export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-100">Welcome, Abu.</h1>
            <p className="text-slate-400">Select an option from the sidebar to manage your portfolio content.</p>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">Blog Posts</h3>
                    <p className="text-slate-400 text-sm mb-4">Write and manage your thoughts.</p>
                </div>
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">Profile Info</h3>
                    <p className="text-slate-400 text-sm mb-4">Update your bio and contact details.</p>
                </div>
            </div>
        </div>
    );
}
