import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo placeholder - left blank for separate upload */}

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center nav-links space-x-8">
            <Link 
            href="/"
            className="flex items-center justify-center px-10">
              <Image
                src="/arm-nav-logo.png"
                alt="ARM Institute"
                width={100}
                height={100}
              />
            </Link>
            <Link
              href="/project-calls"
              className=""
            >
              Project Calls
            </Link>
            <Link
              href="/project-proposal"
              className=""
            >
              Project Proposal
            </Link>
            <Link
              href="/all-projects"
              className=""
            >
              All Projects
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1">
                Community
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/community/events" className="w-full">
                    Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/community/members" className="w-full">
                    Members
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/community/organizations" className="w-full">
                    Organizations
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 ">
                Resource Center
                <ChevronDown className="w-4 h-4 " />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    href="/resource-center/arm-member-guide"
                    className="w-full"
                  >
                    ARM Member Guide
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resource-center/webinars" className="w-full">
                    Webinars
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resource-center/articles" className="w-full">
                    Articles
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 cursor-pointer" />
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-blue-500 text-white">
              M
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
