import Navbar from "./(components)/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col max-h-screen h-screen">
        <Navbar/>
        <div className="bg-page flex-grow">
        {children}
        </div>
        </div>
        </body>
    </html>
  );
}
