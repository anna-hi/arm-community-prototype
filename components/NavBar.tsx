"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links for reuse
  const navLinks = (
    <>
      <Link href="/project-calls" className="">Project Calls</Link>
      <Link href="/project-proposal" className="">Project Proposal</Link>
      <Link href="/all-projects" className="">All Projects</Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1">Community<ChevronDown className="w-4 h-4 text-gray-600" /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem><Link href="/community/events" className="w-full">Events</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/community/members" className="w-full">Members</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/community/organizations" className="w-full">Organizations</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 ">Resource Center<ChevronDown className="w-4 h-4 " /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem><Link href="/resource-center/arm-member-guide" className="w-full">ARM Member Guide</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/resource-center/webinars" className="w-full">Webinars</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/resource-center/articles" className="w-full">Articles</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );

  return (
    <header className="bg-white border-b border-gray-200 py-3">
      <div className="max-w-7xl ml-[134px] mr-[144px] flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo placeholder - left blank for separate upload */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/images/homepage/arm-nav-logo.png"
              alt="ARM Institute"
              width={100}
              height={100}
              className="w-[100px] h-[100px] min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]"
            />
          </Link>

          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex items-center nav-links space-x-8">
            {navLinks}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 cursor-pointer" />
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-blue-500 text-white">M</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden">
          <div className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6 animate-slide-in">
            <nav className="flex flex-col gap-4">{navLinks}</nav>
            <div className="flex items-center space-x-4 mt-auto">
              <Bell className="w-5 h-5 cursor-pointer" />
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-blue-500 text-white">M</AvatarFallback>
              </Avatar>
            </div>
          </div>
          {/* Click outside to close */}
          <button
            className="absolute inset-0 w-full h-full bg-transparent cursor-default"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={-1}
          />
        </div>
      )}
    </header>
  );
};

export default NavBar;
