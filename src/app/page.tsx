"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

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
      <Sheet>
        <SheetTrigger className="fixed top-5 left-5 bg-transparent p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <Menu className="w-6 h-6" />
        </SheetTrigger>

        {/* Drawer Content (Now on the LEFT Side) */}
        <SheetContent
          side="left"
          className="w-80 p-4 bg-white dark:bg-gray-800 shadow-lg"
        >
          {/* Accessibility Requirement: Add a Title */}
          <SheetTitle className="text-lg font-bold text-gray-900 dark:text-white">
            Menu
          </SheetTitle>

          {/* Navigation Buttons */}
          <div className="mt-4 space-y-2">
            <button
              onClick={() => navigateTo("/servers")}
              className="block w-full bg-gray-200 p-2 rounded dark:bg-gray-700"
            >
              servers
            </button>
            <button
              onClick={() => navigateTo("/games")}
              className="block w-full bg-gray-200 p-2 rounded dark:bg-gray-700"
            >
              games
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
