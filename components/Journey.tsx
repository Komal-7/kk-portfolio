"use client";
import {
    Badge,
  createTheme,
  ThemeProvider,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoTerminalOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

const customTimelineTheme = createTheme({
  timeline: {
    item: {
      point: {
        marker: {
          icon: {
            base: "h-5 w-5 text-[#7F9574] dark:text-[#039275]",
            wrapper:
              "absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#EAEDE8] ring-2 ring-[#D0D7CB] dark:bg-[#1F2937] dark:ring-[#41536d]",
          },
        },
      },
      content: {
        title: { 
            base: "text-lg font-semibold text-[#485641] dark:text-white"
        }
      }
    },
  },
  badge: {
    root: {
      base: "flex h-fit items-center gap-1 font-semibold rounded p-1.5 text-sm",
      color: {
        cyan:
          "bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d]",
      },
      size: {
        xs: "p-1 text-xs",
        sm: "p-1.5 text-sm",
      },
    },
  },
});

export function Journey() {
    
    return (
       <section
            id="journey"
            className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-8 md:px-40 text-white scroll-mt-20"
        >
            
        <div className="space-y-6">
        <p className="text-4xl font-bold tracking-tight text-[#7F9574] dark:text-[#039275] sm:text-5xl">My Journey</p>
        <p className="mt-4 text-lg text-[#283648] dark:text-gray-300">A timeline of my professional, on-campus, and educational experiences.</p>
                
        <p className="text-2xl font-bold text-[#485641] dark:text-white mb-6">Professional Experience</p>
        <ThemeProvider theme={customTimelineTheme}>
        <Timeline>
            <TimelineItem>
                <TimelinePoint icon={HiOutlineBriefcase} />
                <TimelineContent>
                    <TimelineTitle>Senior Software Developer</TimelineTitle>
                    <TimelineTime>Parspec  |  April 2022 - July 2024</TimelineTime>
                    <TimelineBody>
                        <div className="text-left pt-5 pb-4 [box-shadow:8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:8px_8px_12px_-6px_rgba(6,174,146,0.3)]">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Built and maintained high-quality UI components from design specifications, ensuring pixel-perfect implementation, responsive layouts, and a consistent user experience across modules.</li>
                                <li>Worked on comprehensive migration of the project from Angular to React, enhancing performance, scalability, and maintainability while enabling smoother team collaboration during the transition.</li>
                                <li>Integrated and customized the Apryse library for PDF handling, extending its functionality to meet project-specific requirements and improving document management efficiency.</li>
                                <li>Developed a custom tracking tool to analyze user events and generate productivity reports, delivering actionable insights that supported data-driven decision-making.</li>
                                <li>Automated regression testing using Autify, reducing manual testing effort and improving overall testing efficiency.</li>
                            </ul>
                            <div className="pt-3 flex flex-wrap gap-2">
                                <Badge color="cyan" size="sm">React</Badge>
                                <Badge color="cyan" size="sm">Typescript</Badge>
                                <Badge color="cyan" size="sm">Progressive Migration</Badge>
                                <Badge color="cyan" size="sm">Component-Driven Development</Badge>
                                <Badge color="cyan" size="sm">Apryse (PDF SDK)</Badge>
                                <Badge color="cyan" size="sm">PDF Rendering & 2D Canvas</Badge>
                                <Badge color="cyan" size="sm">XFDF Annotation Handling</Badge>
                                <Badge color="cyan" size="sm">GraphQL (Data Query & API Design)</Badge>
                                <Badge color="cyan" size="sm">Clickstream Tracking</Badge>
                                <Badge color="cyan" size="sm">User Behavior Analysis</Badge>
                                <Badge color="cyan" size="sm">Autify</Badge>

                                
                            </div>
                        </div>
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint icon={HiOutlineBriefcase} />
                <TimelineContent>
                    <TimelineTitle>Software Engineer</TimelineTitle>
                    <TimelineTime>Jeavio  |  May 2020 - August 2021</TimelineTime>
                    <TimelineBody>
                        <div className="text-left pt-5 pb-4 [box-shadow:8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:8px_8px_12px_-6px_rgba(6,174,146,0.3)]">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Built and optimized front-end widgets in React for network performance, hybrid cloud observability, and SD-WAN management platforms.</li>
                                <li>Designed interactive dashboards and data visualizations to monitor real-time system health, traffic metrics, and multi-cloud environments.</li>
                                <li>Managed complex data integrations and UI state management to deliver responsive, intuitive monitoring interfaces for end users.</li>
                            </ul>
                            <div className="pt-3 flex flex-wrap gap-2">
                                <Badge color="cyan" size="sm">React</Badge>
                                <Badge color="cyan" size="sm">JavaScript (ES6+)</Badge>
                                <Badge color="cyan" size="sm">Data Visualization</Badge>
                                <Badge color="cyan" size="sm">Recharts</Badge>
                                <Badge color="cyan" size="sm">Network Monitoring UI</Badge>
                                <Badge color="cyan" size="sm">Cloud Observability</Badge>
                                <Badge color="cyan" size="sm">UI Performance Optimization</Badge>
                            </div>
                        </div>
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint icon={HiOutlineBriefcase} />
                <TimelineContent>
                    <TimelineTitle>Associate Software Engineer</TimelineTitle>
                    <TimelineTime>Jeavio  |  May 2019 - May 2020</TimelineTime>
                    <TimelineBody>
                        <div className="text-left pt-5 pb-4 [box-shadow:8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:8px_8px_12px_-6px_rgba(6,174,146,0.3)]">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Developed and maintained Angular-based frontend components for eCare Vault’s care coordination platform, including dynamic eForms, dashboards, and collaboration tools for schools and healthcare organizations.</li>
                                <li>Implemented PDF rendering and data integration to support secure document sharing and reporting within the platform.</li>
                                <li>Worked with sensitive patient data in compliance with HIPAA guidelines, incorporating role-based access control and secure UI data handling.</li>
                                <li>Collaborated closely with cross-functional teams in an Agile environment, gaining hands-on experience with Scrum practices and Git-based version control throughout the development lifecycle.</li>
                            </ul>
                            <div className="pt-3 flex flex-wrap gap-2">
                                <Badge color="cyan" size="sm">Angular</Badge>
                                <Badge color="cyan" size="sm">Javascript</Badge>
                                <Badge color="cyan" size="sm">eForms / Form Workflows</Badge>
                                <Badge color="cyan" size="sm">PDF Handling</Badge>
                                <Badge color="cyan" size="sm">HIPAA</Badge>
                            </div>
                        </div>
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        
        <p className="text-2xl font-bold text-[#485641] dark:text-white mb-6">On Campus Experience</p>
        <Timeline>
            <TimelineItem>
                <TimelinePoint icon={IoTerminalOutline} />
                <TimelineContent>
                    <TimelineTitle>Graduate Student Research Assistant</TimelineTitle>
                    <TimelineTime>CSUF  |  June 2025 - Present</TimelineTime>
                    <TimelineBody>
                        <div className="text-left pt-5 pb-4 [box-shadow:8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:8px_8px_12px_-6px_rgba(6,174,146,0.3)]">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Developed a full-stack IoT-enabled tablet application for a supportive housing research project, featuring two assistive modules — Smart Cooking Assistant and Smart Pill Dispenser.</li>
                                <li>Built the Smart Cooking Assistant in Android (Kotlin) to guide residents through recipes with ingredients, cooking steps, and step-specific videos. Integrated real-time progress updates between the backend and the app to sync current recipe steps automatically from stove IoT device.</li>
                                <li>Designed and implemented the Smart Pill Dispenser module, allowing users to schedule medications (daily, alternate days, weekly) and receive real-time dispense notifications in the app.</li>
                                <li>Integrated Arduino Wi-Fi hardware with backend APIs to control pill dispensing and synchronize updates when schedules were added, modified, or deleted.</li>
                                <li>Developed the Node.js/Express backend with a PostgreSQL database hosted on Render, managing all device and app communication.</li>
                                <li>Configured a DigitalOcean VPS proxy service to bridge communication between HTTP-based Arduino devices and the HTTPS backend, ensuring secure and reliable integration.</li>
                                <li>Deployed the full system and successfully demoed it to a supportive housing organization, showcasing real-world potential for independent living assistance.</li>
                            </ul>
                            <div className="pt-3 flex flex-wrap gap-2">
                                <Badge color="cyan" size="sm">Android (Kotlin)</Badge>
                                <Badge color="cyan" size="sm">Node.js</Badge>
                                <Badge color="cyan" size="sm">Express.js</Badge>
                                <Badge color="cyan" size="sm">PostgreSQL</Badge>
                                <Badge color="cyan" size="sm">Render</Badge>
                                <Badge color="cyan" size="sm">DigitalOcean VPS</Badge>
                                <Badge color="cyan" size="sm">IoT Integration</Badge>
                                <Badge color="cyan" size="sm">Arduino Wi-Fi</Badge>
                                <Badge color="cyan" size="sm">RESTful APIs</Badge>
                                <Badge color="cyan" size="sm">Real-Time Synchronization</Badge>
                            </div>
                        </div>
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint icon={FaLaptopCode} />
                <TimelineContent>
                    <TimelineTitle>Teaching Associate</TimelineTitle>
                    <TimelineTime>Jeavio  |  August 2025 - Present</TimelineTime>
                    <TimelineBody>
                        <div className="text-left pt-5 pb-4 [box-shadow:8px_8px_12px_-6px_rgba(40,54,72,0.3)] dark:[box-shadow:8px_8px_12px_-6px_rgba(6,174,146,0.3)]">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Mentored undergraduate students in C++ programming, focusing on coding best practices, algorithmic thinking, and debugging strategies.</li>
                                <li>Designed and conducted hands-on lab sessions integrated with GitHub Classroom, teaching students Git, GitHub, and version control workflows.</li>
                                <li>Helped students translate theoretical programming knowledge into practical problem-solving skills through applied coding exercises.</li>
                                <li>Introduced pair programming to improve collaboration and peer learning during lab exercises.</li>
                                <li>Implemented CI/CD pipelines to automatically evaluate lab submissions for test case accuracy, code formatting, and linting compliance.</li>
                            </ul>
                            <div className="pt-3 flex flex-wrap gap-2">
                                <Badge color="cyan" size="sm">C++</Badge>
                                <Badge color="cyan" size="sm">Ubuntu</Badge>
                                <Badge color="cyan" size="sm">Git Version Control</Badge>
                                <Badge color="cyan" size="sm">GitHub Classroom</Badge>
                                <Badge color="cyan" size="sm">Pair Programming</Badge>
                                <Badge color="cyan" size="sm">CI/CD Pipelines</Badge>
                                <Badge color="cyan" size="sm">Automated Testing</Badge>
                                <Badge color="cyan" size="sm">Code Quality & Linting</Badge>
                            </div>
                        </div>
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
        </Timeline>

        <p className="text-2xl font-bold text-[#485641] dark:text-white mb-6">Education</p>
        <Timeline>
            <TimelineItem>
                <TimelinePoint icon={PiStudent} />
                <TimelineContent>
                    <TimelineTitle>Master of Science, Computer Science, GPA: 3.95/4.0 </TimelineTitle>
                    <TimelineTime>California State University, Fullerton  |  August 2024 - May 2026</TimelineTime>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint icon={PiStudent} />
                <TimelineContent>
                    <TimelineTitle>Bachelor of Technology in Computer Engineering, GPA: 3.0/4.0 </TimelineTitle>
                    <TimelineTime>Dharmsinh Desai University, Nadiad, India  |  May 2015 - May 2019</TimelineTime>
                </TimelineContent>
            </TimelineItem>
        </Timeline>

        </ThemeProvider>
        </div>
        </section>
    )
}