"use client";

import { useState, useEffect } from "react";

interface DateTimeProps {
  onClick?: () => void;
}

export default function DateTime({ onClick }: DateTimeProps) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();

    return `${dayName} ${month} ${day}`;
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, "0");

    return `${displayHours}:${displayMinutes} ${ampm}`;
  };

  return (
    <button
      onClick={onClick}
      className="px-3 py-1 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded transition-colors duration-200 text-sm font-medium cursor-pointer"
    >
      {formatDate(currentTime)} {formatTime(currentTime)}
    </button>
  );
}
