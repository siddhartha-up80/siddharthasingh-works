"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmail } from "@/services/mails";
import { X, Calendar, Mail } from "lucide-react";

interface AppointmentMessageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
}

export default function AppointmentMessageDialog({
  isOpen,
  onClose,
  selectedDate,
}: AppointmentMessageDialogProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formatDate = (date: Date | null) => {
    if (!date) return "";

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  };

  // Pre-fill the message with appointment details
  const getDefaultMessage = () => {
    if (!selectedDate) return "";
    return `I would like to book an appointment call on ${formatDate(
      selectedDate
    )}.\n\nPreferred time: \n\nTopic to discuss: \n\nAdditional notes: `;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) {
      alert("Email and message are required");
      return;
    }

    try {
      setLoading(true);
      const appointmentMessage = `APPOINTMENT REQUEST\n\nDate: ${formatDate(
        selectedDate
      )}\n\n${message}`;

      await sendEmail({
        sentByEmail: email,
        body: appointmentMessage,
      });

      setSuccessMessage("Appointment request sent successfully!");
      setEmail("");
      setMessage("");

      // Close dialog after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Failed to send appointment request:", error);
      alert("Failed to send appointment request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setEmail("");
      setMessage("");
      setSuccessMessage("");
      onClose();
    }
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
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-lg"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Book Appointment</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(selectedDate)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  disabled={loading}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="appointment-email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="appointment-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="appointment-message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message Details
                    </label>
                    <textarea
                      id="appointment-message"
                      value={message || getDefaultMessage()}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your appointment details..."
                      rows={8}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Success Message */}
                  {successMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm text-center font-medium"
                    >
                      {successMessage}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? "Sending Request..."
                      : "Send Appointment Request"}
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Your appointment request will be sent to Siddhartha Singh.
                    You&apos;ll receive a confirmation via email.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
