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
import { Calendar } from "lucide-react";

// Work experience data
const workExperience = [
  {
    id: 1,
    company: "Cloud Ambassadors",
    position: "AI & ML Architect",
    duration: "May 2025 - Present",
    description:
      "Lead the frontend development of multiple web applications. Implemented modern React architecture with TypeScript, Redux, and Tailwind CSS. Improved performance and user experience across all products.",
    skills: ["React", "TypeScript", "Redux", "Next.js"],
    type: "work",
  },
  {
    id: 2,
    company: "Cloud Ambassadors",
    position: "Senior Data Engineer",
    duration: "Nov 2024 - April 2025",
    description:
      "Developed responsive web applications for clients across various industries. Worked with React, Vue.js, and Angular. Collaborated with designers to implement pixel-perfect UI/UX.",
    skills: ["Python", "Fast API", "Google Cloud Storage", "Cloud Run", "PostgreSQL"],
    type: "work",
  },
  {
    id: 3,
    company: "Accenture Solutions Pvt Ltd",
    position: "Application Development Analyst",
    duration: "Dec 2023 - Oct 2024",
    description:
      "Assisted in developing the company's main product using vanilla JavaScript and jQuery. Implemented responsive designs and learned about product development lifecycle.",
    skills: ["JavaScript", "jQuery", "CSS", "HTML"],
    type: "work",
  },
  {
    id: 4,
    company: "Accenture Solutions Pvt Ltd",
    position: "Application Development Associate",
    duration: "Oct 2021 - Nov 2023",
    description:
      "Assisted in developing the company's main product using vanilla JavaScript and jQuery. Implemented responsive designs and learned about product development lifecycle.",
    skills: ["JavaScript", "jQuery", "CSS", "HTML"],
    type: "work",
  },
  {
    id: 5,
    company: "Visveswaraya Technological University",
    degree: "Bachelor of Engineering in Electronics and Communication",
    duration: "June 2017 - July 2021",
    description:
      "Specialized in Electronics and Communication Engineering. Graduated with honors and completed a thesis on performance optimization in React applications.",
    type: "education",
  },
  {
    id: 6,
    company: "Deeksha SGPTA PU College",
    degree: "Pre University College - PCMB",
    duration: "June 2015 - June 2017",
    description:
      "Focused on Pre University College. Graduated with distinction.",
    type: "education",
  },
  {
    id: 7,
    company: "Acharaya Patashala Public School",
    degree: "Indian Certificate of Secondary Education (ICSE)",
    duration: "June 2004 - June 2015",
    description:
      "Focused on Pre University College. Graduated with distinction.",
    type: "education",
  },
  
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="experience" className="py-16 md:py-20 overflow-hidden w-full">
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
          <div className="space-y-6">
            {workExperience.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  item: (typeof workExperience)[0];
  index: number;
}

function ExperienceCard({ item, index }: ExperienceCardProps) {
  // Company/Education logo mapping
  const getCompanyLogo = (company: string) => {
    const logoMap: { [key: string]: string } = {
      "Cloud Ambassadors": "/cloud-ambassadors-logo.jpeg", // You'll need to add this image
      "Accenture Solutions Pvt Ltd": "/accenture-logo.jpeg", // You'll need to add this image
      "Visveswaraya Technological University": "/vtu-logo.png", // You'll need to add this image
      "Deeksha SGPTA PU College": "/deeksha-logo.png", // You'll need to add this image
      "Acharaya Patashala Public School": "/school-logo.jpg", // You'll need to add this image
    };
    return logoMap[company] || "/default-logo.png"; // Fallback logo
  };

  return (
    <FadeIn
      direction="up"
      delay={0.1 * index}
      className="w-full"
    >
      <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
        <div className="flex items-start gap-6 p-6">
          {/* Company/Education Logo Circle */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center border-2 border-primary/20 shadow-md">
              <img
                src={getCompanyLogo(item.company)}
                alt={`${item.company} logo`}
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = item.type === "work" 
                      ? '<svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/></svg>'
                      : '<svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
                  }
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.type === "work" ? item.position : item.degree}
                </h3>
                <p className="text-lg font-medium text-primary mb-2">
                  {item.company}
                </p>
              </div>
              <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                <Calendar className="mr-1 h-3 w-3" />
                {item.duration}
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {item.description}
            </p>
            
            {item.skills && (
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </FadeIn>
  );
}
