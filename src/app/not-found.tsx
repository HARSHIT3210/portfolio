"use client";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-500">Oops! You found a secret! 🎉</h1>
      <p className="text-xl mt-4">Since you&apos;re here, enjoy this random meme:</p>
      <Image src="https://api.memegen.link/images/awesome.png" width={400} height={300} alt="Meme" />
    </div>
  );
}
