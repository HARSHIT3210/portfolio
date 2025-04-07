"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SecretPage() {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(5); // Initialize countdown timer

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
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
            <div className="bg-white text-gray-700 bg-opacity-20 p-10 rounded-lg shadow-lg text-center">
                <h1 className="text-5xl font-extrabold mb-4">🎉 You found the secret page!</h1>
                <p className="mt-3 text-xl font-medium">
                    Redirecting you back in <span className="font-bold">{timeLeft}</span> seconds...
                </p>
            </div>
        </div>
    );
}
