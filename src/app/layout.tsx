import type { Metadata } from "next";
import "./globals.css";
import ImageHoverGallery from "./page";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
      <div className="p-8">
    <h1 className="text-2xl font-bold mb-4 text-center">Hover to Expand Images</h1>
    <ImageHoverGallery />
  </div>
      </body>
    </html>
  );
}
