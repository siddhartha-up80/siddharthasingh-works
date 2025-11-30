"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import DateTime from "./DateTime";
import CalendarDialog from "./CalendarDialog";
import AppointmentConfirmDialog from "./AppointmentConfirmDialog";
import AppointmentMessageDialog from "./AppointmentMessageDialog";

export default function Navbar({
  items,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
}) {
  const pathname = usePathname();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateTimeClick = () => {
    setIsCalendarOpen(true);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
    setIsConfirmOpen(true);
  };

  const handleConfirmAppointment = () => {
    setIsConfirmOpen(false);
    setIsMessageOpen(true);
  };

  return (
    <div
      className={`min-w-screen !sticky !top-0 z-20 backdrop-blur-lg w-full backdrop-filter`}
    >
      <div className="px-3 mx-auto flex justify-between items-center py-1 font-medium">
        {/* <Logo /> */}
        <div className="capitalize flex gap-1 flex-wrap">
          {pathname?.split("/")?.map((item, index) => {
            return <span key={index}>{index > 1 ? ": " + item : item}</span>;
          })}
        </div>

        {/* Center - DateTime */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <DateTime onClick={handleDateTimeClick} />
        </div>

        {/* Mobile - DateTime */}
        <div className="block md:hidden">
          <button
            onClick={handleDateTimeClick}
            className="text-xs font-medium px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </button>
        </div>

        <div className="flex gap-1 justify-self-end">
          <ThemeToggle />
          <MobileNav items={items} />
        </div>
      </div>

      {/* Dialogs */}
      <CalendarDialog
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        onDateSelect={handleDateSelect}
      />
      <AppointmentConfirmDialog
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirmAppointment}
        selectedDate={selectedDate}
      />
      <AppointmentMessageDialog
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
        selectedDate={selectedDate}
      />
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div className="font-black hover:text-primary text-2xl transition-colors ease-linear duration-300">
        Siddhartha Singh
      </div>
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex justify-center items-center"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

function MobileNav({
  items,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden sticky z-50 top-0">
        <Button variant={"ghost"} size={"icon"} onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[70vw] pt-10">
        <div className="flex flex-col justify-start w-full gap-3">
          {items.map((link, idx) => (
            <Button
              variant={"ghost"}
              size={"lg"}
              key={idx}
              className={cn(
                "flex justify-start items-center gap-4 px-4 font-medium",
                pathname === link.href ? "bg-red-200 dark:bg-red-900 " : ""
              )}
              onClick={() => setOpen(false)}
            >
              <span>{link.icon}</span>
              <Link href={link.href} className="text-xl">
                {link.title}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
