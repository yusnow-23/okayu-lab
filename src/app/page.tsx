import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
