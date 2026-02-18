
import { createPost } from "@/lib/admin-actions";


export default function NewPostPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">Write New Post</h2>

            <form action={createPost} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-slate-300">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                        placeholder="Enter post title"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="slug" className="block text-sm font-medium text-slate-300">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        id="slug"
                        required
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500"
                        placeholder="my-new-post"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="content" className="block text-sm font-medium text-slate-300">Content (Markdown)</label>
                    <textarea
                        name="content"
                        id="content"
                        required
                        rows={15}
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500 font-mono"
                        placeholder="# Hello World..."
                    />
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                        Publish Post
                    </button>
                </div>
            </form>
        </div>
    );
}
