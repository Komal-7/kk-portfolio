"use client";
import {
    Badge,
  Button,
  createTheme,
  ThemeProvider,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  Tooltip,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCode, HiOutlineBriefcase } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";

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
                <TimelinePoint icon={HiCode }/>
                <TimelineContent>
                    <TimelineTime>March 2022</TimelineTime>
                    <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
                    <TimelineBody>
                        All of the pages and components are first designed in Figma and we keep a parity between the two versions
                        even as we update the project.
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                <TimelineTime>April 2022</TimelineTime>
                <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
                <TimelineBody>
                    Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                </TimelineBody>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        
        <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">On Campus Experience</p>
        <Timeline>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>February 2022</TimelineTime>
                    <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
                    <TimelineBody>
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                    </TimelineBody>
                    <Button color="gray">
                        Learn More
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>March 2022</TimelineTime>
                    <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
                    <TimelineBody>
                        All of the pages and components are first designed in Figma and we keep a parity between the two versions
                        even as we update the project.
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
        </Timeline>

        <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</p>
        <Timeline>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>February 2022</TimelineTime>
                    <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
                    <TimelineBody>
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                    </TimelineBody>
                    <Button color="gray">
                        Learn More
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>March 2022</TimelineTime>
                    <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
                    <TimelineBody>
                        All of the pages and components are first designed in Figma and we keep a parity between the two versions
                        even as we update the project.
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        </ThemeProvider>
        </div>
        </section>
    )
}