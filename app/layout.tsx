import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabRAM – Track Which Tabs Are Killing Your RAM",
  description: "Chrome extension that monitors memory-heavy tabs and suggests which ones to kill. Stay fast, stay focused.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dd38c6e2-4bd5-484f-8440-d94858544db6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
