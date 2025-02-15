"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

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
              onClick={() => setCurrentPage("Page 1")}
              className="block w-full bg-gray-200 p-2 rounded dark:bg-gray-700"
            >
              Page 1
            </button>
            <button
              onClick={() => setCurrentPage("Page 2")}
              className="block w-full bg-gray-200 p-2 rounded dark:bg-gray-700"
            >
              Page 2
            </button>
          </div>

          {/* Dynamic Content Area */}
          <div className="mt-4 border-t pt-4">
            {currentPage ? (
              <h2 className="text-lg text-gray-900 dark:text-white">
                {currentPage} Content
              </h2>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Select a page</p>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
