import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContact } from "@/components/MobileContact";
import { MotionProvider } from "@/components/MotionProvider";
import { QuickAnswers } from "@/components/QuickAnswers";
export const metadata: Metadata = {
  title: { default: "Moon Glow Travel Agency", template: "%s | Moon Glow" },
  description:
    "Personal assistance for visas, flights, hotels, holidays, Hajj and Umrah, and medical travel.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <MotionProvider />
        <Header />
        <main>{children}</main>
        <Footer />
        <QuickAnswers />
        <MobileContact />
      </body>
    </html>
  );
}
