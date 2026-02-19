
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

export async function getProfile() {
    return await prisma.profile.findUnique({ where: { id: "user" } });
}

export async function getExperiences() {
    const experiences = await prisma.experience.findMany({
        orderBy: { order: "asc" },
    });
    return experiences.map(exp => ({
        ...exp,
        skills: JSON.parse(exp.skills) as string[],
    }));
}

export async function getSkills() {
    const skills = await prisma.skill.findMany();
    // Group by category
    const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push({ id: skill.id, name: skill.name });
        return acc;
    }, {} as Record<string, { id: string; name: string }[]>);

    return Object.entries(grouped).map(([category, items]) => ({
        category,
        items,
    }));
}

export async function getEducations() {
    return await prisma.education.findMany();
}
