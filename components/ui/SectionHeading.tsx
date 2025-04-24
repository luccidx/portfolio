import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
      )}
    </div>
  );
}
