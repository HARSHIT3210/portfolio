"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GlitchText from "@/components/easter-eggs/glitch-text";

export default function Custom404() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
      <GlitchText className="text-8xl text-gray-300 font-extrabold" text={"404!"}/>
      <h2 className="text-3xl font-bold mt-4">
        Oops! You ventured too far! 🚀
      </h2>
      <p className="text-lg mt-2 opacity-80">
        But since youre here... why not have some fun?
      </p>

      <Button
        onClick={() => setShowSecret(!showSecret)}
        className="mt-6 px-5 py-2 text-lg font-bold bg-red-500 hover:bg-red-700 transition-all"
      >
        {showSecret ? "Hide Secret" : "Reveal the Secret"}
      </Button>

      {showSecret && (
        <div className="mt-6">
          <p className="text-xl font-semibold">Here is your reward! 🎁</p>
          <Image
            src="https://api.memegen.link/images/random.png"
            width={400}
            height={300}
            alt="Secret Meme"
            className="mt-4 rounded-lg shadow-lg"
          />
        </div>
      )}

      <Link href="/" className="mt-4 text-blue-400 hover:underline">
        Take me back home
      </Link>
    </div>
  );
}
