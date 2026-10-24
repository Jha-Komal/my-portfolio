import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills, { SkillsBand } from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import portfolio from "@/data/portfolio.json";
import type { PortfolioData } from "@/data/types";

const data = portfolio as PortfolioData;

export default function Home() {
  return (
    <>
      <Navbar name={data.profile.name} />
      <main className="flex-1">
        <Hero profile={data.profile} />
        <SkillsBand skills={data.skills} />
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Resume profile={data.profile} resume={data.resume} experience={data.experience} />
        <Contact profile={data.profile} />
      </main>
      <Footer name={data.profile.name} />
    </>
  );
}
