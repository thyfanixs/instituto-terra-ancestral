"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetPath } from "../lib/asset-path";

type NavigationItem = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

const actionSubmenu = [
  { href: "/acoes#formacao", label: "Formação" },
  { href: "/acoes#saude", label: "Saúde" },
  { href: "/acoes#acoes-culturais", label: "Eventos formativos" },
] as const;

const navigation: NavigationItem[] = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/acoes", label: "Ações", children: actionSubmenu },
  { href: "/impacto", label: "Impacto" },
  { href: "/noticias", label: "Notícias" },
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
        {navigation.map((item) => {
          const isActive = item.href === "/acoes"
            ? pathname.startsWith("/acoes")
            : pathname === item.href;

          if (item.children) {
            return (
              <div className="nav-item nav-item-with-submenu" key={item.href}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  aria-haspopup="true"
                  className={isActive ? "active" : ""}
                  href={item.href}
                >
                  {item.label}<span className="nav-caret" aria-hidden="true">⌄</span>
                </Link>
                <div className="desktop-submenu" aria-label="Categorias de ações">
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href}>{child.label}</Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <Link className="header-cta" href="/apoie">Apoie o ITA</Link>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu"><span /><span /></summary>
        <nav aria-label="Navegação móvel">
          {navigation.map((item) => item.children ? (
            <details className="mobile-submenu" key={item.href}>
              <summary>{item.label}<span aria-hidden="true">+</span></summary>
              <div>
                {item.children.map((child) => (
                  <Link href={child.href} key={child.href}>{child.label}</Link>
                ))}
              </div>
            </details>
          ) : (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
