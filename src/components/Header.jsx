import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header" id="top">
      <div className="site-shell mx-auto w-full max-w-[1200px] px-6 max-[600px]:px-[18px] header-inner">
        <a className="brand" href="#top" aria-label="CyberKel, Frimpong Kelvin home" onClick={closeMenu}>
          <img className="brand-logo" src="/cyberkel-logo.jpg" alt="" aria-hidden="true" />
          <span className="brand-name">CyberKel</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="site-shell mx-auto w-full max-w-[1200px] px-6 max-[600px]:px-[18px] mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      )}
    </header>
  )
}

export default Header