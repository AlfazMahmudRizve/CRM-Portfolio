
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Seed Profile
    await prisma.profile.upsert({
        where: { id: 'user' },
        update: {},
        create: {
            id: 'user',
            name: "Abu Zubayer",
            title: "Customer Service Specialist & English Literature Scholar",
            bio: "Specializing in customer service and call center operations, I harness CRM systems to deliver top-tier support. Currently pursuing a Bachelor of Arts in English Language and Literature, I integrate academic insights into professional interactions, enhancing communication dynamics.",
            headline: "Elevating Customer Experience through Empathy & Precision.",
            email: "your.email@example.com",
            phone: "+880 1234 567 890",
            linkedin: "https://linkedin.com/in/abuzubayer"
        }
    })

    // Seed Experience
    const experiences = [
        {
            role: "Customer Service Executive",
            company: "Hello World Communication",
            client: "Apollo Imperial Hospitals (Hospital Info Center Ops)",
            startDate: "Dec 2024",
            endDate: "July 2025",
            description: "Managed hospital information center operations, ensuring clear communication between patients and medical staff.",
            impact: "Fundamentals of hospital information center management.",
            skills: JSON.stringify(["Healthcare Ops", "Patient Relations", "Info Management"]),
            order: 1
        },
        {
            role: "Customer Service Officer",
            company: "Genex Infosys PLC",
            client: "Robi Axiata Limited (Telecom Call Center)",
            startDate: "Sept 2022",
            endDate: "Dec 2024",
            description: "Provided high-volume support for a major telecom operator, resolving technical and billing issues with precision.",
            impact: "Consistently maintained high satisfaction ratings in a fast-paced call center environment.",
            skills: JSON.stringify(["Telecom Support", "CRM", "Call Handling"]),
            order: 2
        },
        {
            role: "Trade Marketing Representative",
            company: "Abul Khair Tobacco Company Ltd",
            client: null,
            startDate: "Dec 2021",
            endDate: "May 2022",
            description: "Executed trade marketing strategies and maintained relationships with distributors and retailers.",
            impact: "Improved improved visibility and retailer engagement in assigned territories.",
            skills: JSON.stringify(["Trade Marketing", "Retail Relations", "Field Sales"]),
            order: 3
        }
    ]

    for (const exp of experiences) {
        await prisma.experience.create({ data: exp })
    }

    // Seed Skills
    const skills = [
        { category: "Key Competencies", name: "CRM Systems" },
        { category: "Key Competencies", name: "Office Suite" },
        { category: "Key Competencies", name: "Data Entry" },
        { category: "Key Competencies", name: "Telecommunications Knowledge" },
        { category: "Key Competencies", name: "Active Listening" },
        { category: "Key Competencies", name: "Conflict Resolution" },
        { category: "Key Competencies", name: "Public Speaking" },
        { category: "Key Competencies", name: "Team Leadership" },
        { category: "Key Competencies", name: "Critical Thinking" }
    ]

    for (const skill of skills) {
        await prisma.skill.create({ data: skill })
    }

    // Seed Education
    await prisma.education.create({
        data: {
            institution: "Port City International University",
            degree: "Bachelor of Arts w/ Honors in English",
            date: "Jan 2022 - Dec 2025",
            details: "Focus on Language and Literature, enhancing analytical and communication skills."
        }
    })

    // Seed Initial Blog Post
    await prisma.post.create({
        data: {
            title: "Welcome to my new Portfolio",
            slug: "welcome",
            content: "## Hello World\n\nThis is my first blog post on my new portfolio site. I built this utilizing Next.js, Prisma and SQLite.",
            published: true
        }
    })

    console.log('Database seeded successfully')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
