"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedBackground from "../AnimatedBackground";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
