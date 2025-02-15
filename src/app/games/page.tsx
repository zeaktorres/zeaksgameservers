"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";
import Drawer from "@/components/Drawer";


export default function ZombieGamePage() {
  const [isOpen, setIsOpen] = useState(false); // State to close drawer on navigation
  const router = useRouter(); // Next.js Router

  // Function to navigate and close the drawer
  const navigateTo = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close the drawer after navigating
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        This is my zombie game. Click to spawn zombies and kill the human!
      </h1>

      {/* Drawer Component */}
      <Drawer navigateTo={navigateTo} />

      {/* WebGL Game */}
      <iframe
        src="/ZombieGame/index.html"
        className="w-full h-full flex-grow"
        style={{ border: "none" }}
        title="Zombie Game"
        loading="lazy" // Lazy load the iframe
      ></iframe>
    </div>
  );
}
