
import { getPostBySlug } from "@/lib/actions";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export const revalidate = 60;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-900">
            <Section className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="space-y-6 border-b border-slate-800 pb-8">
                        <div className="flex items-center gap-2 text-sm text-indigo-400 font-medium bg-indigo-500/10 px-3 py-1 rounded-full w-fit">
                            <Calendar className="w-3 h-3" />
                            <time dateTime={post.createdAt.toISOString()}>
                                {new Date(post.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    {/* Content */}
                    <article className="prose prose-invert prose-indigo max-w-none prose-lg
                        prose-headings:font-serif prose-headings:font-bold
                        prose-p:text-slate-300 prose-p:leading-relaxed
                        prose-li:text-slate-300
                        prose-strong:text-slate-100
                        prose-a:text-indigo-400 hover:prose-a:text-indigo-300"
                    >
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </article>
                </div>
            </Section>
        </div>
    );
}
