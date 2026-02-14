import { SpeedInsights } from "@vercel/speed-insights/next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { ClientProviders } from "@/components/ClientProviders";

// Server Component - better for SEO and performance
export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--t-bg)" }}>
      {/* Client-side interactive components */}
      <ClientProviders />

      {/* Main content - can be server-rendered */}
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Contact />
      <Footer />

      {/* Performance monitoring */}
      <SpeedInsights />
    </main>
  );
}
