"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FadeIn from "@/components/animation/FadeIn";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, React, and Stripe for payment processing.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A real-time task management application with collaborative features and customizable workflows.",
    image: "/placeholder-project-2.jpg",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description:
      "An AI-powered image generation tool that creates unique artwork based on text prompts.",
    image: "/placeholder-project-3.jpg",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "ai",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A portfolio website built with Next.js, Tailwind CSS, and Framer Motion animations.",
    image: "/placeholder-project-4.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays real-time weather data and forecasts for multiple locations.",
    image: "/placeholder-project-5.jpg",
    tags: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 6,
    title: "Blockchain Explorer",
    description:
      "A blockchain explorer for viewing transactions, blocks, and wallet information.",
    image: "/placeholder-project-6.jpg",
    tags: ["React", "Node.js", "Web3.js", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "blockchain",
  },
];

// Project categories
const categories = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
  { id: "ai", name: "AI & ML" },
  { id: "blockchain", name: "Blockchain" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Explore some of my recent work and personal projects.
          </p>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2} className="mb-8 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="capitalize"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * (index % 3)}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href={project.githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" /> Code
          </Link>
        </Button>
        <Button asChild size="sm">
          <Link href={project.liveUrl} target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
