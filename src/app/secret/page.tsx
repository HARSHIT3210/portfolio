"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";

export default function SecretPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(5); // Initialize countdown timer
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000); // Redirect after 5 sec

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row items-center justify-center overflow-hidden rounded-lg bg-background">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={200}
        color={color}
        refresh
      />
      <div className="text-gray-200 bg-opacity-20 p-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          You found the secret page!
        </h1>
        <p className="mt-3 text-xl font-medium">
          Redirecting you back in <span className="font-bold">{timeLeft}</span>{" "}
          seconds...
        </p>
      </div>
    </div>
  );
}
