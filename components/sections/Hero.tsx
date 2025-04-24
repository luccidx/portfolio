"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";
import TextReveal from "@/components/animation/TextReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Full-Stack Developer
            </span>
          </FadeIn>

          <TextReveal
            text="Building beautiful digital experiences with modern technologies"
            className="text-3xl md:text-5xl font-bold mb-6"
            delay={0.2}
          />

          <FadeIn
            delay={0.5}
            direction="up"
            className="mb-8 md:text-lg text-muted-foreground max-w-xl mx-auto"
          >
            <p>
              I specialize in creating elegant, high-performance web
              applications using cutting-edge technologies and best practices.
              Let's bring your ideas to life.
            </p>
          </FadeIn>

          <div className="flex flex-wrap gap-4 justify-center">
            <FadeIn delay={0.6}>
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>

            <FadeIn delay={0.7}>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70" />
    </section>
  );
}
