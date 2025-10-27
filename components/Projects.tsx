"use client";
import { Button, Card } from "flowbite-react";
import { FaCode } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

export function Projects() {
    return (
       <section
            id="projects"
            className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-8 md:px-40 text-white scroll-mt-20"
        >
            <div className="space-y-6">
                <p className="text-4xl font-bold tracking-tight text-[#7F9574] dark:text-[#039275] sm:text-5xl">Projects</p>

                <div className="relative flex flex-col md:flex-row items-center justify-center pb-5">
                    <div className="z-10 md:-mr-16 w-full md:w-2/3">
                        <h3 className="text-xl font-semibold text-[#485641] dark:text-white pb-5">
                            Smart Cooking Assistant
                        </h3>
                        <Card className="rounded-sm shadow-lg [box-shadow:-8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:-8px_8px_12px_-6px_rgba(6,174,146,0.3)]">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            An IoT-powered tablet app that guides users through recipes step by step, displaying ingredients, cooking instructions, and videos for each stage. It syncs with a smart stove device, updating the interface in real time as the user progresses through the recipe.
                        </p>
                        </Card>
                        <p className="text-sm text-gray-600 dark:text-gray-400 py-4">
                            Android Kotlin
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Node.js Express
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            PostgreSQL
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Render
                        </p>
                        <Button className="bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                            <FaCode className="w-4 h-4"/>
                            <span>Code</span>
                        </Button>
                    </div>
                    <ProjectCard image="smart-cook" />
                </div>

                <div className="relative flex flex-col md:flex-row-reverse items-center justify-center pb-5">
                    <div className="z-10 md:-ml-16 w-full md:w-2/3 text-right">
                        <h3 className="text-xl font-semibold text-[#485641] dark:text-white pb-5">
                            Smart Pillbox Dispenser
                        </h3>
                        <Card className="rounded-sm shadow-lg [box-shadow:8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:8px_8px_12px_-6px_rgba(6,174,146,0.3)]">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            A connected health companion that allows users to schedule and manage medication doses with customizable options. It connects to an IoT pill dispenser that automatically releases pills at the scheduled time and updates the app in real time when doses are dispensed.
                        </p>
                        </Card>
                        <p className="text-sm text-gray-600 dark:text-gray-400 py-4">
                            Android
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Node.js Express
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            PostgreSQL
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            DigitalOcean VPS
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Render
                        </p>

                        <div className="flex justify-end">
                        <Button className="bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                            <FaCode className="w-4 h-4" />
                            <span>Code</span>
                        </Button>
                        </div>
                    </div>
                    <ProjectCard image="smart-cook" />
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center pb-5">
                    <div className="z-10 md:-mr-16 w-full md:w-2/3">
                        <h3 className="text-xl font-semibold text-[#485641] dark:text-white pb-5">
                            Music Recommendation System
                        </h3>
                        <Card className="rounded-sm shadow-lg [box-shadow:-8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:-8px_8px_12px_-6px_rgba(6,174,146,0.3)]">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            A Mood and Activity-Based Music Recommendation System uses Semantic Web technologies to deliver intelligent, context-aware song suggestions. By modeling Spotify track data as RDF triples and querying it through SPARQL, the system recommends music based on mood and activity contexts, offering users more meaningful and personalized playlists.
                        </p>
                        </Card>
                        <p className="text-sm text-gray-600 dark:text-gray-400 py-4">
                            Python
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            SPARQL
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            rdflib
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Spotipy
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            React
                        </p>
                        <Button className="bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                            <FaCode className="w-4 h-4"/>
                            <span>Code</span>
                        </Button>
                    </div>
                    <ProjectCard image="smart-cook" />
                </div>
            </div>
        </section>
    )
}