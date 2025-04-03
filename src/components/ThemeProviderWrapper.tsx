"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Prevent hydration mismatch
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
