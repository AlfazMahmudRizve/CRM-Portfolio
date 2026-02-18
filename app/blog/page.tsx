
import Link from "next/link";
import { getPosts } from "@/lib/actions";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-900">
            <Section className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-100">
                            Thoughts & Insights
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Exploring literature, customer experience, and the intersection of empathy and efficiency.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group block p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300"
                            >
                                <article className="space-y-4">
                                    <div className="flex items-center justify-between text-sm text-slate-500">
                                        <time dateTime={post.createdAt.toISOString()}>
                                            {new Date(post.createdAt).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </time>
                                        <span className="flex items-center gap-1 text-indigo-400 group-hover:translate-x-1 transition-transform">
                                            Read Post <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                                        {post.title}
                                    </h2>
                                    {post.excerpt && (
                                        <p className="text-slate-400 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    )}
                                </article>
                            </Link>
                        ))}

                        {posts.length === 0 && (
                            <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
                                <p className="text-slate-400">No posts published yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
}
