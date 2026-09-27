import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveBav from "@/components/Home/Nav/ResponsiveBav";

const font = Rubik({
 weight:['300','400','500','600','700','800','900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Web agency",
  description: "A modern web agency website built with Next.js & Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
        suppressHydrationWarning
      >
        <Provider>
          <ResponsiveBav/>
        {children}
        </Provider>
      </body>
    </html>
  );
}
