import { Nunito } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "Airbnb 2.0",
  description: "Creating a clone of Airbnb webapp",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
