import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MotionObserver from "./components/MotionObserver";
import { assetPath } from "./lib/asset-path";

export const metadata: Metadata = {
  title: {
    default: "Instituto Terra Ancestral | Cultura, educação e cuidado",
    template: "%s | Instituto Terra Ancestral",
  },
  description: "O Instituto Terra Ancestral fortalece pessoas, comunidades e territórios por meio da cultura, da educação, dos saberes ancestrais e do cuidado integral.",
  icons: {
    icon: assetPath("/images/official/logo-ita.png"),
    shortcut: assetPath("/images/official/logo-ita.png"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body style={{ "--home-hero-image": `url("${assetPath("/images/gallery/ancestralidade/01.jpg")}")` } as CSSProperties}>
        <SiteHeader />
        <MotionObserver />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
