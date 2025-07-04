import Navbar from "@/component/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-scroll h-full bg-gradient-to-b from-background to-background-secondary"
    >
      <body className="min-h-screen min-w-screen overflow-hidden bg-gradient-to-b from-background to-background-secondary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
