import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
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
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Contact profile={data.profile} />
      </main>
      <Footer name={data.profile.name} />
    </>
  );
}
