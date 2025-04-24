"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";
import TextReveal from "@/components/animation/TextReveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 overflow-hidden flex items-center justify-center w-full"
    >
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto bg-background/70 dark:bg-background/60 backdrop-blur-xl rounded-3xl shadow-lg border border-border/40 p-6 sm:p-8 md:p-12"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
        >
          <div className="text-center">
            <FadeIn delay={0.4}>
              <motion.span
                className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Full-Stack Developer
              </motion.span>
            </FadeIn>

            <TextReveal
              text="Building beautiful digital experiences with modern technologies"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
              delay={0.5}
            />

            <FadeIn
              delay={0.7}
              direction="up"
              className="mb-8 md:mb-10 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              <p>
                I specialize in creating elegant, high-performance web
                applications using cutting-edge technologies and best practices.
                Let's bring your ideas to life.
              </p>
            </FadeIn>

            <div className="flex flex-wrap gap-4 justify-center">
              <FadeIn delay={0.8}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 py-5 h-auto text-base"
                  >
                    <Link href="#projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl px-5 py-5 h-auto text-base"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-28 left-[15%] w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-[15%] w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />

      {/* Card decorative elements */}
      <motion.div
        className="absolute top-[-50px] left-[10%] w-14 h-14 rounded-xl bg-primary/30 backdrop-blur-md hidden md:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-[-30px] right-[15%] w-10 h-10 rounded-full bg-blue-400/30 backdrop-blur-md hidden md:block"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
}
