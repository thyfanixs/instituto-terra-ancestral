import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MotionObserver from "./components/MotionObserver";

export const metadata: Metadata = {
  title: {
    default: "Instituto Terra Ancestral | Cultura, educação e cuidado",
    template: "%s | Instituto Terra Ancestral",
  },
  description: "O Instituto Terra Ancestral fortalece pessoas, comunidades e territórios por meio da cultura, da educação, dos saberes ancestrais e do cuidado integral.",
  icons: {
    icon: "/images/official/logo-ita.png",
    shortcut: "/images/official/logo-ita.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        <MotionObserver />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
