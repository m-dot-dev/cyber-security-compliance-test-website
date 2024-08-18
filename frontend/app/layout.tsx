import { Metadata } from "next";
import { Poppins } from "next/font/google";

import AppFooter from "@/components/common/AppFooter";
import AppHeader from "@/components/common/AppHeader";
import FooterStrip from "@/components/common/FooterStrip";
import HeaderStrip from "@/components/common/HeaderStrip";
import "@/index.css";
import React, { Suspense } from "react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Cyber",
  description: "cyber",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Suspense>
          <header className="sticky top-0 z-[100]">
            <HeaderStrip />
            <AppHeader />
          </header>
          <div>
            <div>Center Image</div>
          </div>
          <main className="bg-white">
            <div id="root">{children}</div>
          </main>
          <footer>
            <AppFooter />
            <FooterStrip />
          </footer>
        </Suspense>
      </body>
      <Toaster position="bottom-left" duration={5000} richColors={true} />
    </html>
  );
}
