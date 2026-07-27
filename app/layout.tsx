import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instituto Terra Ancestral | Cultura, educação e cuidado",
  description:
    "O Instituto Terra Ancestral fortalece pessoas, comunidades e territórios por meio da cultura, da educação, dos saberes ancestrais e do cuidado integral.",
  icons: {
    icon: "/images/portfolio/page-01-02.png",
    shortcut: "/images/portfolio/page-01-02.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
