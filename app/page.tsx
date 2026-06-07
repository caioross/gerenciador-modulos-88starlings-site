import Nav from "../components/Nav";
import { Hero, Workflow, Features, Stack, CTA, Footer } from "../components/Sections";

export default function Page() {
  return (
    <main className="relative z-[2]">
      <Nav />
      <Hero />
      <Workflow />
      <Features />
      <Stack />
      <CTA />
      <Footer />
    </main>
  );
}
