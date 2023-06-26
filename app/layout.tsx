import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkable flexbox developer projects.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
