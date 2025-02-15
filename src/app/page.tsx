"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Drawer from "@/components/Drawer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // State to close drawer on navigation
  const router = useRouter(); // Next.js Router

  // Function to navigate and close the drawer
  const navigateTo = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close the drawer after navigating
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* Main Content */}
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
        Welcome to Your Next.js App
      </h1>

      {/* Drawer Component */}
      <Drawer navigateTo={navigateTo} />
    </div>
  );
}
