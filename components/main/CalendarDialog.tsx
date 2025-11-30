"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: Date) => void;
}

export default function CalendarDialog({
  isOpen,
  onClose,
  onDateSelect,
}: CalendarDialogProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDateChange = (value: any) => {
    const date = value as Date;
    onDateSelect(date);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="hidden md:block fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-[450px]"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-sm sm:text-lg font-semibold tabular-nums">
                  {currentTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close calendar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Calendar */}
              <div className="p-3 sm:p-6 bg-white dark:bg-gray-900">
                <Calendar
                  onChange={handleDateChange}
                  value={null}
                  minDate={new Date()}
                  className="w-full border-0 rounded-xl dark:text-gray-100"
                  locale="en-US"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
