
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

// --- Experience Actions ---

export async function createExperience(formData: FormData) {
    const role = formData.get("role") as string;
    const company = formData.get("company") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;
    const description = formData.get("description") as string;
    const impact = formData.get("impact") as string;
    const skillsString = formData.get("skills") as string; // Comma separated

    const skills = skillsString.split(",").map(s => s.trim()).filter(Boolean);

    await prisma.experience.create({
        data: {
            role,
            company,
            startDate,
            endDate: endDate || null,
            description,
            impact: impact || null,
            skills: JSON.stringify(skills),
            order: 0, // Default order
        },
    });

    revalidatePath("/");
    revalidatePath("/admin/experience");
}

export async function deleteExperience(id: string) {
    await prisma.experience.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/admin/experience");
}

// --- Skill Actions ---

export async function createSkill(formData: FormData) {
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;

    await prisma.skill.create({
        data: { name, category },
    });

    revalidatePath("/");
    revalidatePath("/admin/skills");
}

export async function deleteSkill(id: string) {
    await prisma.skill.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/admin/skills");
}

// --- Education Actions ---

export async function createEducation(formData: FormData) {
    const institution = formData.get("institution") as string;
    const degree = formData.get("degree") as string;
    const date = formData.get("date") as string;
    const details = formData.get("details") as string;

    await prisma.education.create({
        data: { institution, degree, date, details },
    });

    revalidatePath("/");
    revalidatePath("/admin/education");
}

export async function deleteEducation(id: string) {
    await prisma.education.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/admin/education");
}
