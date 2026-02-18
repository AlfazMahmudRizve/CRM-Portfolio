
"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// --- Profile Actions ---

export async function getProfile() {
    return await prisma.profile.findUnique({ where: { id: "user" } });
}

export async function updateProfile(formData: FormData) {
    const name = formData.get("name") as string;
    const title = formData.get("title") as string;
    const bio = formData.get("bio") as string;
    const headline = formData.get("headline") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const linkedin = formData.get("linkedin") as string;

    await prisma.profile.upsert({
        where: { id: "user" },
        update: { name, title, bio, headline, email, phone, linkedin },
        create: { id: "user", name, title, bio, headline, email, phone, linkedin },
    });

    revalidatePath("/");
    revalidatePath("/admin");
}

// --- Experience Actions ---

export async function getExperiences() {
    return await prisma.experience.findMany({ orderBy: { order: "asc" } });
}

// --- Post Actions ---

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const content = formData.get("content") as string;

    await prisma.post.create({
        data: {
            title,
            slug,
            content,
            published: true, // Auto-publish for simplicity
        },
    });

    revalidatePath("/blog");
    revalidatePath("/admin");
}

export async function deletePost(id: string) {
    await prisma.post.delete({ where: { id } });
    revalidatePath("/blog");
    revalidatePath("/admin");
}
