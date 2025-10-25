import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center  min-h-[80vh] px-8 md:px-40 text-white scroll-mt-20"
    >
    
      <div className="md:w-1/2 space-y-6 text-center md:text-left z-100">
        <h1 className="text-4xl md:text-6xl font-bold text-[#7F9574] dark:text-[#039275]">
          Hi, I'm Komal Kiri
        </h1>
        <p className="text-lg md:text-xl text-[#283648] dark:text-gray-300 leading-relaxed">
          I’m a software developer passionate about building modern web
          applications with React, Next.js, and Tailwind CSS. I love creating
          clean, responsive interfaces and exploring new technologies that make
          development faster and more enjoyable.
        </p>
      </div>

      
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center z-100">
        <div className="w-100 h-100 md:w-110 md:h-110 rounded-full overflow-hidden shadow-lg shadow-[#283648]/20 dark:shadow-[#06AE92]/20">
          <Image
            src="/avatar-full.png"
            alt="Komal Kiri"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
