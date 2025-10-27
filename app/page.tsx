import About from "@/components/About";
import { Contact } from "@/components/Contact";
import { Journey } from "@/components/Journey";
import { MyNavbar } from "@/components/MyNavbar";
import { ProfileBadge } from "@/components/ProfileBadge";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="absolute inset-0 size-full">
        <div className="relative h-full w-full select-none">
          <Image
            className="absolute top-16 right-0 min-w-dvh dark:hidden"
            alt="Pattern Light"
            src="/pattern-light.svg"
            width="803"
            height="774"
          />
          <Image
            className="absolute top-16 right-0 hidden min-w-dvh dark:block"
            alt="Pattern Dark"
            src="/pattern-dark.svg"
            width="803"
            height="775"
          />
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4">
        <DarkThemeToggle />
      </div>
      
      <MyNavbar />
        <ProfileBadge />
      <About />
      <Journey />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
