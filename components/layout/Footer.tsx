"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="#home" className="text-2xl font-bold">
              <span className="text-primary">G Santosh Kumar</span>
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              Building scalable AI solutions with modern technologies
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/santosh-kumar-g-cloudambassadors"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/g-santosh-kumar/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://x.com/g_santoshkumar1"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.instagram.com/luccidx/"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" /> 
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="mailto:girisantoshkumar1999@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} G Santosh Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
