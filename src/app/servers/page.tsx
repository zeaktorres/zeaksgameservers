"use client";

import React, { useState } from "react";
import Drawer from "@/components/Drawer";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { PlayIcon, StopIcon } from "@heroicons/react/24/outline";

const ServersPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to close drawer on navigation
  const router = useRouter(); // Next.js Router

  // Function to navigate and close the drawer
  const navigateTo = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close the drawer after navigating
  };

  const handleRowClick = (serverKey: string) => {
    router.push(`/servers/${serverKey}`);
  };

  const handlePlayClick = (event: React.MouseEvent, serverKey: string) => {
    event.stopPropagation();
    console.log(`Play clicked for server ${serverKey}`);
    // Add your play logic here
  };

  const handleStopClick = (event: React.MouseEvent, serverKey: string) => {
    event.stopPropagation();
    console.log(`Stop clicked for server ${serverKey}`);
    // Add your stop logic here
  };

  const data = [
    {
      key: "1",
      name: "Server 1",
      ip: "192.168.1.1",
      status: "Online",
    },
    {
      key: "2",
      name: "Server 2",
      ip: "192.168.1.2",
      status: "Offline",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Drawer Component */}
      <div className="h-12">
        <Drawer navigateTo={navigateTo}></Drawer>
      </div>
      <div className="flex-grow p-4">
        <Table>
          <TableCaption>A list of your servers.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Server Name</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((server) => (
              <TableRow key={server.key} onClick={() => handleRowClick(server.key)} className="cursor-pointer">
                <TableCell className="font-medium">{server.name}</TableCell>
                <TableCell>{server.ip}</TableCell>
                <TableCell>{server.status}</TableCell>
                <TableCell>
                  <button className="text-green-500 mr-2" onClick={(event) => handlePlayClick(event, server.key)}>
                    <PlayIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-500" onClick={(event) => handleStopClick(event, server.key)}>
                    <StopIcon className="h-5 w-5" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServersPage;