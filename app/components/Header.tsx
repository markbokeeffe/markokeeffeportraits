import Logo from './Logo';
import NavLinks from './NavLinks';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}