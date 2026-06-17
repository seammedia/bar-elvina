import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Signatures } from "@/components/signatures";
import { Together } from "@/components/together";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Signatures />
      <Together />
      <Visit />
      <Footer />
    </>
  );
}
