import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Focus Mode Enforcer — Block Distractions During Deep Work",
  description: "Temporarily mute channels, hide notifications, auto-reply with focus status, and track productivity streaks on Discord."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4dc7b6f0-05d2-4c55-8a65-a3f74125230a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
