import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Balaji Travels — Quote Builder",
  description: "Internal quote builder for Balaji Travels agents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent flash: set theme before React hydrates */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('bt-theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');})();`
        }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
