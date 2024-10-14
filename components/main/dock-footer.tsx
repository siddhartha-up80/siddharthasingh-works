"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import { Code, Instagram, Library, Linkedin, Mail, User } from "lucide-react";
import Image from "next/image";

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-red-500 dark:text-red-300" />,
    href: "/",
  },

  {
    title: "About",
    icon: <User className="h-full w-full text-red-500 dark:text-red-300" />, // User icon for About section
    href: "/portfolio#about",
  },
  {
    title: "Projects",
    icon: <Code className="h-full w-full text-red-500 dark:text-red-300" />, // Code icon for Projects
    href: "/portfolio#projects",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full text-red-500 dark:text-red-300" />, // Mail icon for Contact section
    href: "/portfolio#contact",
  },

  {
    title: "LinkedIn",
    icon: <Linkedin className="h-full w-full text-red-500 dark:text-red-300" />,
    href: "https://www.linkedin.com/in/siddhartha-singh-work",
  },

  {
    title: "Instagram",
    icon: (
      <Instagram className="h-full w-full text-red-500 dark:text-red-300" />
    ),
    href: "https://www.instagram.com/sid_up80",
  },
  {
    title: "X | Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-red-500 dark:text-red-300" />
    ),
    href: "https://x.com/siddhartha_up80",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-red-500 dark:text-red-300" />
    ),
    href: "https://github.com/siddhartha-up80",
  },
  {
    title: "Classic Portfolio",
    icon: (
      <IconTerminal2 className="h-full w-full text-red-500 dark:text-red-300" />
    ),
    href: "https://siddharthasingh.me",
  },
];

const DockFooter = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
};

export default DockFooter;
