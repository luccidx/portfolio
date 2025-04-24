"use client";

import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/animation/FadeIn";
import Image from "next/image";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "GraphQL", level: 75 },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Get to know more about me, my skills, and my experience.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-xl overflow-hidden aspect-square max-w-md mx-auto md:mx-0">
              <Image
                src="/placeholder-profile.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn direction="left" delay={0.2}>
              <h3 className="text-2xl font-semibold mb-2">Who am I?</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer with a strong focus on
                creating beautiful, responsive, and user-friendly web
                applications. With over 5 years of experience in web
                development, I've worked on a variety of projects from small
                business websites to complex enterprise applications.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with creative
                problem-solving to deliver solutions that not only meet the
                requirements but exceed expectations. I'm constantly learning
                and adapting to new technologies to stay at the forefront of web
                development.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card key={skill.name} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
