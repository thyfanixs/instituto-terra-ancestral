import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/images/official/logo-ita.png" alt="" />
        <div><strong>Instituto Terra Ancestral</strong><span>Cultura · educação · cuidado</span></div>
      </div>
      <address>
        Rua Jornalista Nicolau Neto, 293, Portal das Acácias<br />
        Pedro Leopoldo · MG · 33254-226
      </address>
      <div className="footer-links">
        <a href="mailto:institutoita.gerais@gmail.com">institutoita.gerais@gmail.com</a>
        <a href="https://www.instagram.com/ita.gerais/" target="_blank" rel="noreferrer">@ita.gerais ↗</a>
      </div>
      <div className="footer-bottom"><span>© 2026 ITA</span><Link href="/apoie">Apoie o Instituto</Link></div>
    </footer>
  );
}
