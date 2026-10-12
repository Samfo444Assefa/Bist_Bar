import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="nav" id="nav">
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">B</span><span>BISIT BAR</span>
      </a>
      <button className="menu" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>☰</button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#culture" onClick={closeMenu}>Culture</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#program" onClick={closeMenu}>Program</a>
        
        <a href="#location" onClick={closeMenu}>Location</a>
        {/* <a href="#rsvp" className="nav-cta" onClick={closeMenu}>FeedBack</a> */}
      </nav>
    </header>
  );
}
