import "./globals.css";

export const metadata = {
  title: "AirBNB 2.0",
  description: "Creating a clone of AirBNB webapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
