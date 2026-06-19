import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Rooms } from "@/components/rooms";
import { Signatures } from "@/components/signatures";
import { WhatsOn } from "@/components/whats-on";
import { Together } from "@/components/together";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Rooms />
      <Signatures />
      <WhatsOn />
      <Together />
      <Visit />
      <Footer />
    </>
  );
}
