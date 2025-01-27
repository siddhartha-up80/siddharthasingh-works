"use client";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { ReactNode, useEffect, useRef } from "react";

interface AnimatedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedModal({
  open,
  onOpenChange,
  children,
  className,
}: AnimatedModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => onOpenChange(false));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        >
          <Overlay />
          <motion.div
            ref={modalRef}
            className={`relative z-50 dark:bg-neutral-950 bg-white md:rounded-2xl overflow-hidden ${
              className || ""
            }`}
            initial={{ opacity: 0, scale: 0.5, rotateX: 40, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 15 }}
          >
            <CloseButton onClick={() => onOpenChange(false)} />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function AnimatedModalContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-8 md:p-10 ${className || ""}`}>{children}</div>;
}

export function AnimatedModalFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex justify-end p-4 bg-gray-100 dark:bg-neutral-900 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

function Overlay({ className }: { className?: string }) {
  return (
    <motion.div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${className || ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
    />
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      title="Close Modal"
      onClick={onClick}
      className="absolute top-4 right-4 group"
    >
      <X className="dark:text-white" />
    </button>
  );
}

/**
 * Helper to close the modal if the user clicks outside it
 */
function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      callback();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}
