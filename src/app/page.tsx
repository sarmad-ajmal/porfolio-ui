import { SpeedInsights } from "@vercel/speed-insights/next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ClientProviders } from "@/components/ClientProviders";

// Server Component - better for SEO and performance
export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg">
      {/* Client-side interactive components */}
      <ClientProviders />

      {/* Main content - can be server-rendered */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />

      {/* Performance monitoring */}
      <SpeedInsights />
    </main>
  );
}
