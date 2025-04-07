"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize / 2);
  const mouseY = useMotionValue(-gradientSize / 2);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseOut = useCallback(() => {
    mouseX.set(-gradientSize / 2);
    mouseY.set(-gradientSize / 2);
  }, [mouseX, mouseY, gradientSize]);

  const handleMouseEnter = useCallback(() => {
    mouseX.set(-gradientSize / 2);
    mouseY.set(-gradientSize / 2);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseOut);
    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseOut);
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-[inherit] overflow-hidden",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-border duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
          ${gradientFrom}, 
          ${gradientTo}, 
          transparent 100%)
          `,
        }}
      />
      <div className="absolute inset-px rounded-[inherit] bg-background" />
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
MagicCard.displayName = "MagicCard";