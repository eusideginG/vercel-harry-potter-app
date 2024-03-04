import type { Metadata } from "next";
import "./globals.css";

/**
 * application metadata
 */
export const metadata: Metadata = {
  title: "Harry Potter Houses",
  description: "information abour Harry Potter houses",
};

/**
 *
 * @param param0 content (React.ReactNode type) of the html body tag
 * @returns the static html of the application
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
