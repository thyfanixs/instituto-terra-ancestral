"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetPath } from "../lib/asset-path";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/acoes", label: "Ações" },
  { href: "/impacto", label: "Impacto" },
  { href: "/apoie", label: "Apoie o ITA" },
  { href: "/contato", label: "Contato" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Instituto Terra Ancestral — início">
        <img src={assetPath("/images/official/logo-ita.png")} alt="" />
        <span><strong>Instituto</strong>Terra Ancestral</span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/apoie">Apoie o ITA</Link>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu"><span /><span /></summary>
        <nav aria-label="Navegação móvel">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </details>
    </header>
  );
}
