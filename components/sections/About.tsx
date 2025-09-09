"use client";

import { useState, useEffect } from "react";
import FadeIn from "@/components/animation/FadeIn";
import LogoLoop from "@/components/animation/LogoLoop";
import { useTheme } from "@/components/ThemeProvider";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiJavascript, 
  SiDocker, 
  SiGit, 
  SiAmazon, 
  SiKubernetes, 
  SiTensorflow, 
  SiVite, 
  SiSvelte,
  SiPytorch,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFigma,
  SiAdobexd
} from 'react-icons/si';

// Technology logos using react-icons
const techLogos = [
  { node: <SiReact className="text-blue-500" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython className="text-yellow-500" />, title: "Python", href: "https://python.org" },
  { node: <SiJavascript className="text-yellow-400" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiDocker className="text-blue-500" />, title: "Docker", href: "https://docker.com" },
  { node: <SiGit className="text-orange-600" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiAmazon className="text-orange-500" />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiKubernetes className="text-blue-600" />, title: "Kubernetes", href: "https://kubernetes.io" },
  { node: <SiTensorflow className="text-orange-500" />, title: "TensorFlow", href: "https://tensorflow.org" },
  { node: <SiPytorch className="text-red-500" />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiVite className="text-purple-500" />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiSvelte className="text-orange-500" />, title: "Svelte", href: "https://svelte.dev" },
  { node: <SiGraphql className="text-pink-500" />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiMongodb className="text-green-500" />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", href: "https://postgresql.org" },
  { node: <SiRedis className="text-red-600" />, title: "Redis", href: "https://redis.io" },
  { node: <SiFigma className="text-purple-600" />, title: "Figma", href: "https://figma.com" },
  { node: <SiAdobexd className="text-pink-600" />, title: "Adobe XD", href: "https://adobe.com/products/xd" }
];

export default function About() {
  const { theme } = useTheme();
  const [fadeColor, setFadeColor] = useState("#ffffff");
  
  // Update fade color when theme changes
  useEffect(() => {
    const updateFadeColor = () => {
      if (theme === "dark") {
        setFadeColor("#0b0b0b");
      } else if (theme === "light") {
        setFadeColor("#ffffff");
      } else {
        // For system theme, check if dark mode is preferred
        if (typeof window !== "undefined") {
          const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          setFadeColor(isDark ? "#0b0b0b" : "#ffffff");
        }
      }
    };

    updateFadeColor();

    // Listen for system theme changes
    if (theme === "system" && typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => updateFadeColor();
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return (
    <section id="about" className="py-16 md:py-20 w-full">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Get to know more about me, my skills, and my experience.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-semibold mb-3 text-center">Who am I?</h3>
              <p className="text-muted-foreground mb-4">
                As an AI &amp; ML Architect, I specialize in designing and building scalable, high-performance AI applications and robust MLOps pipelines. My expertise spans the entire machine learning lifecycle—from model development to deploying production-grade systems using platforms like Google Vertex AI, AutoML, and Kubeflow.
              </p>
              <p className="text-muted-foreground">
                I am passionate about transforming complex ideas into impactful, real-world AI products. With over 4 years of experience, I blend deep technical knowledge with creative problem-solving to deliver solutions that drive innovation and exceed expectations. I am committed to continuous learning and staying at the forefront of AI, ML, and full-stack development.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h3 className="text-2xl font-semibold mb-8 text-center">Technologies I Work With</h3>
              
              <div className="relative overflow-hidden">
                <LogoLoop 
                  logos={techLogos}
                  speed={120}
                  direction="left"
                  logoHeight={48}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor={fadeColor}
                  ariaLabel="Technology partners"
                  className="py-8"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}