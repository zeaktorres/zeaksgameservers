"use client";

import React, { useState } from "react";
import { useParams, useRouter } from 'next/navigation';
import Drawer from "@/components/Drawer";

const ServerKeyDisplay: React.FC = () => {
    const { serverKey } = useParams();
    const router = useRouter(); // Next.js Router
      const [isOpen, setIsOpen] = useState(false); // State to close drawer on navigation

    // Function to navigate and close the drawer
    const navigateTo = (path: string) => {
      router.push(path);
      setIsOpen(false); // Close the drawer after navigating
    };

    return (
        <div className="flex flex-col">
            {/* Drawer Component */}
            <div className="h-40">
                <Drawer navigateTo={navigateTo}></Drawer>
            </div>
            <div>
                <h1>Server Key: {serverKey}</h1>
            </div>
        </div>
    );
};

export default ServerKeyDisplay;