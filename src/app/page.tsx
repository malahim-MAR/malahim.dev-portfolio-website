import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
