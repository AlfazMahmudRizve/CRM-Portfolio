
"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPosts() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
    });
    return posts;
}

export async function getPostBySlug(slug: string) {
    const post = await prisma.post.findUnique({
        where: { slug },
    });
    return post;
}
