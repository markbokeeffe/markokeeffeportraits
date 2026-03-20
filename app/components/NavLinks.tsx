interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Portraits', href: '/portraits' },
  { label: 'Presentations', href: '/presentations' },
  { label: 'Letters', href: '/letters' },
  { label: 'About', href: '/about' },
  { label: 'Commissions', href: '/commissions' },
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