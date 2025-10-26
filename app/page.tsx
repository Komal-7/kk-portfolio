import About from "@/components/About";
import { Journey } from "@/components/Journey";
import { MyNavbar } from "@/components/MyNavbar";
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
      <div className="fixed top-4 right-4 z-15">
      <div className="relative w-24 h-24 md:w-42 md:h-42 rounded-full overflow-hidden border-4 border-[#7F9574] dark:border-[#039275]">
        <Image
          src="/avatar-full.png"
          alt="John Doe's profile picture"
          fill
          className="object-cover"
          priority
        />
      </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <DarkThemeToggle />
      </div>
      <MyNavbar />
      <About />
      <Journey />
    </main>
  );
}
