"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FadeIn from "@/components/animation/FadeIn";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

// Work experience data
const workExperience = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    duration: "Jan 2021 - Present",
    description:
      "Lead the frontend development of multiple web applications. Implemented modern React architecture with TypeScript, Redux, and Tailwind CSS. Improved performance and user experience across all products.",
    skills: ["React", "TypeScript", "Redux", "Next.js"],
    type: "work",
  },
  {
    id: 2,
    company: "University of Technology",
    degree: "Master of Computer Science",
    duration: "Sep 2019 - Dec 2020",
    description:
      "Specialized in Web Technologies and Machine Learning. Graduated with honors and completed a thesis on performance optimization in React applications.",
    type: "education",
  },
  {
    id: 3,
    company: "Digital Solutions LLC",
    position: "Frontend Developer",
    duration: "Mar 2018 - Dec 2020",
    description:
      "Developed responsive web applications for clients across various industries. Worked with React, Vue.js, and Angular. Collaborated with designers to implement pixel-perfect UI/UX.",
    skills: ["React", "Vue.js", "JavaScript", "SCSS"],
    type: "work",
  },
  {
    id: 4,
    company: "Tech University",
    degree: "Bachelor of Computer Science",
    duration: "Sep 2014 - Jun 2018",
    description:
      "Focused on Software Engineering and Web Development. Participated in multiple hackathons and coding competitions. Graduated with distinction.",
    type: "education",
  },
  {
    id: 5,
    company: "StartUp Ventures",
    position: "Web Development Intern",
    duration: "Jun 2017 - Sep 2017",
    description:
      "Assisted in developing the company's main product using vanilla JavaScript and jQuery. Implemented responsive designs and learned about product development lifecycle.",
    skills: ["JavaScript", "jQuery", "CSS", "HTML"],
    type: "work",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="experience"
      className="py-16 md:py-24 overflow-hidden bg-muted/30 w-full"
    >
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2 text-center">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            My professional journey and educational background.
          </p>
        </FadeIn>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"
            style={{
              scaleY: scrollYProgress,
            }}
            initial={{ scaleY: 0 }}
          />

          {/* Timeline Cards */}
          <div className="space-y-12 md:space-y-16 relative">
            {workExperience.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: (typeof workExperience)[0];
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const containerClassName = isEven ? "md:flex-row" : "md:flex-row-reverse";

  const iconClassName = `w-10 h-10 rounded-full flex items-center justify-center z-10 
    ${
      item.type === "work" ? "bg-primary text-white" : "bg-secondary text-white"
    }`;

  return (
    <FadeIn
      direction={isEven ? "right" : "left"}
      delay={0.1 * index}
      className={`flex flex-col md:flex-row items-center ${containerClassName}`}
    >
      {/* Timeline connector and icon */}
      <div className="flex flex-col items-center">
        <div className={iconClassName}>
          {item.type === "work" ? (
            <Briefcase size={20} />
          ) : (
            <GraduationCap size={20} />
          )}
        </div>
      </div>

      {/* Timeline content */}
      <div
        className={`md:w-5/12 w-full mt-4 md:mt-0 ${
          isEven ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <Card>
          <CardHeader>
            <CardTitle>
              {item.type === "work" ? item.position : item.degree}
            </CardTitle>
            <CardDescription className="flex items-center flex-wrap gap-1">
              <span className="font-medium">{item.company}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center text-sm">
                <Calendar className="mr-1 h-3 w-3" />
                {item.duration}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{item.description}</p>
            {item.skills && (
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}
