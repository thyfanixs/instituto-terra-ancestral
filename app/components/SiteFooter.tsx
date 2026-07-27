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
        Pedro Leopoldo · MG · 33254-226<br />
        (31) 97243.2240
      </address>
      <div className="footer-links">
        <a href="mailto:institutoita.gerais@gmail.com">institutoita.gerais@gmail.com</a>
        <a href="https://www.instagram.com/ita.gerais/" target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href="https://www.youtube.com/@itainstitutoterraancestral" target="_blank" rel="noreferrer">YouTube ↗</a>
        <a href="https://www.facebook.com/@itagerais/" target="_blank" rel="noreferrer">Facebook ↗</a>
      </div>
      <div className="footer-bottom"><span>© 2026 ITA</span><Link href="/apoie">Apoie o ITA</Link></div>
    </footer>
  );
}
