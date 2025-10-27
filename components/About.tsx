"use client";

import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

export default function About() {
    const openInNewTab = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
  return (
    <section id="home" className="min-h-screen flex items-center justify-center font-[Inter,sans-serif] px-4">
      <div className="text-center p-4 max-w-4xl mx-auto z-5">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 pb-3 pt-6 tracking-tight text-[#485641] dark:text-gray-300">
          <span className="text-[#485641]/90 dark:text-gray-400">
            Somewhere between a{" "}
          </span>

          {/* Designer text — 4-color animated gradient */}
          <motion.span
            className="font-[Playfair_Display,serif] text-transparent bg-clip-text bg-gradient-to-r from-[#8A7495] via-[#B5A99E] to-[#8FC375]
    dark:from-[#039275] dark:via-[#04AC8A] dark:via-[#609454] dark:to-[#079C7E]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{ backgroundSize: "250% 250%" }}
          >
            designer’s vision
          </motion.span>

          {/* Connector animation */}
          <motion.span
            className="inline-block mx-2 h-1 w-10 align-middle bg-[#7F9574]/70 dark:bg-[#04AC8A]/70 rounded-full"
            animate={{
              y: [0, -4, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          <span className="text-[#485641]/90 dark:text-gray-400">and an </span>

          {/* Engineer text — same gradient reversed */}
          <motion.span
            className="font-[Roboto_Mono,monospace] text-transparent bg-clip-text bg-gradient-to-r from-[#8FC375] via-[#B5A99E] to-[#8A7495]
    dark:from-[#079C7E] dark:via-[#609454] dark:via-[#04AC8A] dark:to-[#039275]"
            animate={{
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{ backgroundSize: "250% 250%" }}
          >
            engineer’s precision
          </motion.span>

          <span className="text-[#485641]/90 dark:text-gray-400">
            {" "}
            lies the harmony I craft.
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I’m a software developer specializing in full-stack development.
        </p>

        <div className="mt-8 flex justify-center gap-8">
            <Button className="cursor-pointer bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d]"
                    onClick={() => openInNewTab("https://www.linkedin.com/in/komal-kiri/")}
            >
                <FaLinkedin className="h-6 w-6" />
            </Button>
            <Button className="cursor-pointer bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d]"
                    onClick={() => openInNewTab("https://github.com/Komal-7")}
            >
                <FaGithub className="h-6 w-6" />
            </Button>
            
            <a href="mailto:kkiri@csu.fullerton.edu" >
                <Button className="cursor-pointer bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d]">
                    <FaEnvelope className="h-6 w-6" />
                </Button>
            </a>
        </div>

        <div className="mt-8 mb-8 flex justify-center">
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className="cursor-pointer flex justify-center gap-2 font-semibold bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d]">
                    <IoDocumentText className="h-6 w-6" />
                    View Resume
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
}
