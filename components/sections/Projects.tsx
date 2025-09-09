"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ElectricBorder from "@/components/ui/ElectricBorder";

// Define project type
interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: string[];
  link?: string;
}

// Sample projects (this should be imported from @/constants in a real project)
const PROJECTS: Project[] = [
  {
    title: "Podcraftor",
    description:
      "Podcraftor is an advanced full-stack platform that automates the entire podcast creation workflow from a simple text prompt. Leveraging Google Text-to-Speech (TTS) with SSML (Speech Synthesis Markup Language) support, Podcraftor generates highly natural, expressive, and human-like audio, allowing for nuanced control over voice, tone, and pacing.",
    image: "/Podcraftor_ai_image.jpeg",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "Fast API",
      "Firebase",
      "Google Cloud Storage",
      "GCP",
      "Google SSO",
      "Google TTS",
      "SSML",
      "Gemini LLM",
      "GenAI SDK",
      "ElevenLabs"
    ],
    category: ["ai", "fullstack","media"],
    link: "https://boxsand.ai/podcast/podcraftor",
  },
  {
    title: "Audiobook",
    description:
      "An intelligent full-stack solution that processes PDFs and ePUB formats to autonomously structure chapters and generate high-quality audiobooks using Google TTS — surpassing traditional audiobook features offered by platforms like ElevenLabs.",
    image: "/Audiobook_image.jpeg",
    tags: [
      "React", 
      "Next.js", 
      "Tailwind CSS", 
      "TypeScript",
      "Python",
      "Fast API",
      "GCP",
      "Google TTS",
      "Gemini LLM",
      "GenAI SDK",
      "WaveSurfer",
      "PDF",
      "ePUB",
      "Firebase",
      "Google Cloud Storage",
      "Google SSO"
    ],
    category: ["ai", "fullstack","media"],
    link: "https://frontend-audiobook-244342848333.us-central1.run.app/",
  },
  {
    title: "Live Audio bot",
    description:
      "A cutting-edge real-time conversational AI agent powered by the Gemini live-voice model, designed to engage in natural, dynamic voice interactions with users. This intelligent agent supports advanced function calling and tool invocation, enabling it to perform complex tasks and take actions on behalf of the user during live conversations. Developed as a proof-of-concept for Flipkart Mitra and Gide.ai.",
    image: "/Audiobot_image.jpeg",
    tags: [
      "React", 
      "Tailwind CSS", 
      "TypeScript", 
      "Gemini live LLM", 
      "GenAI SDK",
      "Google Cloud Run",
      "Google Cloud Storage",
      "PostgreSQL"],
    category: ["ai", "fullstack","bot"],
    link: "https://flipkart-mitra-973165020902.us-central1.run.app/",
  },
  {
    title: "Medical Docs Analyzer",
    description: "A smart healthcare document analysis system capable of interpreting diverse medical documents including handwritten prescriptions and discharge summaries. It extracts key KPIs, detects fraud, verifies document legitimacy, and generates contextual follow-up questions — significantly optimizing insurance claim verifications.",
    image: "/Medical_doc_analyzer.png",
    tags: [
      "React", 
      "Tailwind CSS", 
      "TypeScript", 
      "Python", 
      "Fast API", 
      "Gemini LLM", 
      "GenAI SDK",
      "Google Cloud Storage", 
      "Cloud Run", 
      "PostgreSQL"],
    category: ["ai", "fullstack","medical"],
    link: "https://boxsand.ai/medicalanalyzer",
  },
  {
    title: "Social Media Influenzer Analyser ",
    description: "A comprehensive social media analytics tool that scrapes user comments from platforms like Instagram, YouTube, and Facebook to analyze sentiment trends. It offers an interactive dashboard with actionable KPIs to track influencer campaign effectiveness and audience perception.",
    image: "/SocialMediaInfluenzerAnalyzer.png",
    tags: [
      "React", 
      "Tailwind CSS", 
      "TypeScript", 
      "Python", 
      "Fast API",
      "Selenium",
      "Selenium WebDriver",
      "BeautifulSoup",
      "bs4",
      "Gemini LLM", 
      "GenAI SDK",
      "Google Cloud Storage", 
      "Cloud Run"],
    category: ["ai", "fullstack","media"],
    link: "https://boxsand.ai/sentiment/analysis",
  },
  {
    title: "Podcast AI Idea Generator",
    description: "The Podcast Idea Generator is a sophisticated API-driven application designed to bridge the gap between raw trend data and actionable podcast content. It intelligently combines insights from global Google Trends (accessed via BigQuery) and Podeo's rich internal podcast analytics (stored in Elasticsearch).",
    image: "/PodcastIdeaGenerator.png",
    tags: [
      "React", 
      "Tailwind CSS", 
      "TypeScript", 
      "Python", 
      "Fast API",
      "BigQuery",
      "Elasticsearch",
      "Google Cloud Storage", 
      "Cloud Run",
      "Google Trends API"
    ],
    category: ["ai", "fullstack","media"],
    link: "https://boxsand.ai/podcast/ideas",
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  // Filter projects based on current filter
  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category.includes(filter));

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(new Set(PROJECTS.flatMap((project) => project.category))),
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
              <ElectricBorder
                color={project.category.includes('ai') ? '#7df9ff' : '#6366f1'}
                speed={1.2}
                chaos={0.6}
                thickness={2}
                style={{ borderRadius: 12 }}
                className="group h-full"
              >
                <div className="bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
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
                      <div className="flex flex-wrap gap-1">
                        {project.category.map((cat, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-muted-foreground capitalize bg-muted px-2 py-1 rounded"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
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
              </ElectricBorder>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
