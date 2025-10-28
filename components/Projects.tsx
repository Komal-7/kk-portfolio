"use client";
import { Button, Card, Tooltip } from "flowbite-react";
import { FaCode, FaLock  } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { IoDocumentText } from "react-icons/io5";
import { PiTreeStructureThin } from "react-icons/pi";

export function Projects() {
    return (
       <section
            id="projects"
            className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] mt-28 px-8 md:px-40 text-white scroll-mt-20"
        >
            <div className="space-y-6">
                <p className="text-4xl font-bold tracking-tight text-[#7F9574] dark:text-[#039275] sm:text-5xl">My Projects</p>
                <p className="mt-4 text-lg text-[#283648] dark:text-gray-300">A curated overview of the projects I’ve built</p>
                
                <div className="relative flex flex-col md:flex-row items-center justify-center pb-15">
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
                        <Tooltip
                            content="Can’t share this code, but happy to discuss the tech !"
                            placement="right"
                        >
                            <span className="inline-flex">
                            <Button disabled className="cursor-not-allowed bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                                <FaLock className="h-3 w-3" />
                                Code
                            </Button>
                            </span>
                        </Tooltip>
                    </div>
                    <ProjectCard image="smart-cook" />
                </div>

                <div className="relative flex flex-col md:flex-row-reverse items-center justify-center pb-15">
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
                            Android Kotlin
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Node.js Express
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            PostgreSQL
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Render
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Firebase Cloud Messaging
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            DigitalOcean VPS
                        </p>

                        <div className="flex justify-end">
                        <Tooltip
                            content="Can’t share this code, but happy to discuss the tech !"
                            placement="left"
                        >
                            <span className="inline-flex">
                            <Button disabled className="cursor-not-allowed bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                                <FaLock className="h-3 w-3" />
                                Code
                            </Button>
                            </span>
                        </Tooltip>
                        </div>
                    </div>
                    <ProjectCard image="smart-pill" />
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center pb-15">
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
                        <div className="flex gap-5">
                            <Button 
                                onClick={() => window.open("https://github.com/Komal-7/vibe-verse-frontend", "_blank")}
                                className="cursor-pointer bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                                <FaCode className="w-4 h-4"/>
                                <span>FE Code</span>
                            </Button>
                            <Button 
                                onClick={() => window.open("https://github.com/Komal-7/vibe-verse-backend", "_blank")}
                                className="cursor-pointer bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                                <FaCode className="w-4 h-4"/>
                                <span>BE Code</span>
                            </Button>
                        </div>
    
                    </div>
                    <ProjectCard image="music-rec" />
                </div>

                <div className="relative flex flex-col items-center justify-center pb-15">
                    <h3 className="text-xl font-semibold text-[#485641] dark:text-white pb-5">
                        Portfolio Management Platform
                    </h3>
                    <Card className="rounded-sm shadow-lg [box-shadow:8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:8px_8px_12px_-6px_rgba(6,174,146,0.3)] md:w-3/5">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        A cloud-based platform that empowers users to build and deploy professional portfolios effortlessly. It combines a drag-and-drop editor with automated deployment, allowing users to design, customize, and publish their portfolios in minutes — helping them stand out in the job market.
                    </p>
                    </Card>
                    <p className="text-sm text-gray-600 dark:text-gray-400 py-4">
                        React
                        <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                        Node.js Express
                        <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                        JWT
                        <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                        DynamoDB
                        <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                        AWS S3
                        <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                        GrapesJS
                        <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                        Netlify
                    </p>

                    <div className="flex gap-5">
                    <Button 
                        onClick={() => window.open("https://github.com/Komal-7/folioHub", "_blank")}
                        className="cursor-pointer bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                        <FaCode className="w-4 h-4"/>
                        <span>FE Code</span>
                    </Button>
                    <Button 
                        onClick={() => window.open("https://github.com/Komal-7/folioHub-server", "_blank")}
                        className="cursor-pointer bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                        <FaCode className="w-4 h-4"/>
                        <span>BE Code</span>
                    </Button>
                    <a
                        href="/FolioHub-doc.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="cursor-pointer flex justify-center gap-2 font-semibold bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d]">
                            <PiTreeStructureThin className="h-6 w-6" />
                            Technical Breakdown
                        </Button>
                    </a>
                    </div>
                </div>

                <div className="relative flex flex-col items-center justify-center">
                        <h3 className="text-xl font-semibold text-[#485641] dark:text-white pb-5">
                            AWS Cloud-Based Discussion Forum
                        </h3>
                        <Card className="rounded-sm shadow-lg [box-shadow:-8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:-8px_8px_12px_-6px_rgba(6,174,146,0.3)] md:w-3/5">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            A fully serverless discussion forum designed to explore and master AWS cloud services. It leverages API Gateway, Lambda, and DynamoDB for scalable backend processing, Cognito for user authentication, and Amazon SQS & SES for real-time notifications and user engagement.
                        </p>
                        </Card>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400 py-4 md:w-3/5">
                            AWS Lambda
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            AWS API Gateway
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Amazon DynamoDB
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Amazon Cognito
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Amazon SQS
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Amazon SES
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Amazon Cloudwatch
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            Next.js
                            <span className="text-[#7F9574] dark:text-[#039275] mx-2">|</span>
                            AWS Amplify
                        </p>
                        <div className="flex gap-5">
                    <Button 
                        onClick={() => window.open("https://github.com/Komal-7/topictribe", "_blank")}
                        className="cursor-pointer bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] gap-2">
                        <FaCode className="w-4 h-4"/>
                        <span>FE Code</span>
                    </Button>
                    <a
                        href="/topictribe.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="cursor-pointer flex justify-center gap-2 font-semibold bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d]">
                            <PiTreeStructureThin className="h-6 w-6" />
                            Technical Report
                        </Button>
                    </a>
                    </div>
                </div>
            </div>
        </section>
    )
}