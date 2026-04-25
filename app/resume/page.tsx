import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Siddhartha Singh | Full-Stack Next.js Developer",
  description:
    "View the resume of Siddhartha Singh — Full-Stack Next.js Developer specialising in React, Node.js, and modern web applications.",
  openGraph: {
    title: "Resume | Siddhartha Singh",
    description:
      "View the resume of Siddhartha Singh — Full-Stack Next.js Developer.",
    url: "https://siddharthasingh.co.in/resume",
  },
};

// Google Drive file ID — update only this constant if you ever replace the file.
// The /preview URL always reflects the latest version via Drive versioning.
const DRIVE_FILE_ID = "1o120BxSp6esypJp8SvdpDE-F-8HYTzEO";
const RESUME_EMBED_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;
const RESUME_DRIVE_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`;

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      {/* Header — compact on mobile, spacious on desktop */}
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-4 md:pt-10 md:pb-6 flex flex-row items-center justify-between gap-3">
        <h1 className="text-xl md:text-3xl font-bold tracking-tight">
          My Resume
        </h1>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <a
            href={RESUME_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-border bg-background hover:bg-muted text-foreground transition-colors"
          >
            <Download className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 dark:text-red-400" />
            Download
          </a>
          <a
            href={RESUME_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 text-white transition-colors shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Open in Drive
          </a>
        </div>
      </div>

      {/* Iframe — edge-to-edge on mobile, subtle card on desktop */}
      <div className="md:max-w-5xl md:mx-auto md:px-4 md:pb-10">
        <div className="md:rounded-xl md:overflow-hidden md:border md:border-border md:shadow-sm">
          {/* Mobile: A4 ratio off screen width. Desktop: fixed 1200px so full resume
              renders and users scroll the PAGE, not inside the iframe. */}
          <div className="w-full h-[calc(100vw_*_1.4142)] md:h-[125vh]">
            <iframe
              src={RESUME_EMBED_URL}
              title="Siddhartha Singh — Resume"
              allow="autoplay"
              className="w-full h-full block"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-muted-foreground px-4 py-4 md:pb-0">
        Always the latest version — synced from Google Drive.{" "}
        <a
          href={RESUME_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 dark:text-red-400 underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Download a copy
        </a>{" "}
        if the preview doesn&apos;t load.
      </p>
    </main>
  );
}
