"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

// Define project type
interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: string;
  link?: string;
}

// Sample projects (this should be imported from @/constants in a real project)
const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, React, and Stripe for payment processing.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    category: "web",
    link: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A real-time task management application with collaborative features and customizable workflows.",
    image: "/images/project-2.jpg",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    category: "web",
    link: "https://example.com",
  },
  {
    title: "AI Image Generator",
    description:
      "An AI-powered image generation tool that creates unique artwork based on text prompts.",
    image: "/images/project-3.jpg",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    category: "ai",
    link: "https://example.com",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  // Filter projects based on current filter
  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(new Set(PROJECTS.map((project) => project.category))),
  ];

  return (
    <section id="projects" className="py-16 md:py-20 w-full">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          description="Here are some of my featured projects"
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className="capitalize text-sm"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div className="group h-full bg-card border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-60 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-xl font-semibold text-primary/70">
                        {project.title[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col p-5">
                  <h3 className="font-medium text-lg mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground capitalize">
                        {project.category}
                      </span>
                      {project.link && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 text-xs"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
