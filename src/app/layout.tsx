import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Property Pulse",
  keywords: ["Real Estate", "Property", "Homes", "Apartments", "Rentals", "Buy", "Sell"],
  description: "Find your dream property with Property Pulse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
         <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
