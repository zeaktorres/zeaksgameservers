import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface DrawerProps {
  navigateTo: (path: string) => void;
}

const Drawer: React.FC<DrawerProps> = ({ navigateTo }) => {
  return (
    <Sheet>
      <SheetTrigger className="fixed top-5 left-5 bg-transparent p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition">
        <Menu className="w-6 h-6" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-80 p-4 bg-white dark:bg-gray-800 shadow-lg"
      >
        <SheetTitle className="text-lg font-bold text-gray-900 dark:text-white">
          Menu
        </SheetTitle>

        <div className="mt-4 space-yThis will soon be zeak's zombie game2">
          <button
            onClick={() => navigateTo("/")}
            className="block w-full bg-gray-200 p-2 rounded dark:bg-gray-700"
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("/servers")}
            className="block w-full bg-gray-200 p-2 rounded dark:bg-gray-700"
          >
            Servers
          </button>
          <button
            onClick={() => navigateTo("/games")}
            className="block w-full bg-gray-200 p-2 rounded dark:bg-gray-700"
          >
            Games
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;