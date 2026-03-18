interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Portraits', href: '/portraits' },
  { label: 'Presentations', href: '/presentations' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'About', href: '#about' },
  { label: 'Commissions', href: '#commissions' },
  { label: 'Contact', href: '#contact' },
];

export default function NavLinks() {
  return (
    <nav className="nav-links">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className="nav-link">
          {link.label}
        </a>
      ))}
    </nav>
  );
}