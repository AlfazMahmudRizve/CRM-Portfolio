import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getProfile, getExperiences, getSkills, getEducations } from "@/lib/actions";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  const profile = await getProfile();
  const experiences = await getExperiences();
  const skills = await getSkills();
  const educations = await getEducations();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <ExperienceTimeline experiences={experiences} />
      <Skills skillsData={skills} />
      <Education educations={educations} />
      <Contact profile={profile} />
      <Footer />
    </main>
  );
}
