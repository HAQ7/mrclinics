import { Header } from "./sections/header";
import Hero from "./sections/hero";
import heroBg from "@/assets/hero/hero-section.png";
import Image from "next/image";
import Certificate from "./sections/certificate";
import Services from "./sections/services";
import Team from "./sections/doctors/team";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";

export default function HomePage() {
  return (
    <main className="max-w-7xl px-4 lg:px-8">
      <Header />
      <div className="relative">
        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute bg-gradient-to-l right-0 from-white h-full w-10 z-20" />
          <div className="absolute bg-gradient-to-r left-0 from-white h-full w-10 z-20" />
          <div className="absolute bg-gradient-to-b from-white h-30 w-full z-20" />
          <div className="absolute bg-gradient-to-b from-white h-30 w-full z-10" />
          <Image
            src={heroBg}
            alt="Hero Background"
            fill
            className="object-left bg-cover"
          />
          <div className="absolute bg-gradient-to-t from-white h-30 w-full bottom-0" />
        </div>
        <Hero />
      </div>
      <Certificate />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
