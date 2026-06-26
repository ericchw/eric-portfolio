import { useState, useEffect } from 'react'
import { personal } from '../data/resume'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Projects & Work',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

const SunIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
const MoonIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Active section tracking
  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { threshold: 0.4 })
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const S = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s',
      background: scrolled ? (dark ? 'rgba(6,13,26,0.85)' : 'rgba(248,250,252,0.85)') : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    },
    inner: {
      maxWidth: '72rem', margin: '0 auto', padding: '0 2rem',
      height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    },
    logo: { fontFamily: 'JetBrains Mono, monospace', fontSize: 14, color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.05em', fontWeight: 500 },
    links: { display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 },
    controls: { display: 'flex', alignItems: 'center', gap: 8 },
    themeBtn: { width: 36, height: 36, borderRadius: 10, border: '1px solid var(--border)', background: 'var(--bg-card)', cursor: 'pointer', color: 'var(--text-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' },
  }

  return (
    <>
      <nav style={S.nav}>
        <div style={S.inner}>
          <a href="#about" style={S.logo}>
            <span style={{ opacity: 0.5 }}>~/</span>eric.chan
          </a>

          <ul style={S.links} className="hidden md:flex">
            {links.map(l => {
              const id = l.href.replace('#','')
              const isActive = active === id
              return (
                <li key={l.href}>
                  <a href={l.href} style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
                    color: isActive ? 'var(--accent)' : 'var(--text-3)',
                    textDecoration: 'none', transition: 'color 0.2s',
                    position: 'relative', paddingBottom: 2,
                  }}>
                    {l.label}
                    {isActive && <span style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1, background: 'var(--accent)', borderRadius: 99 }} />}
                  </a>
                </li>
              )
            })}
          </ul>

          <div style={S.controls}>
            <button onClick={() => setDark(!dark)} style={S.themeBtn} aria-label="Toggle theme">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"
              style={{ ...S.themeBtn, flexDirection: 'column', gap: 4 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ display: 'block', height: 1.5, width: 16, background: 'var(--text-3)', borderRadius: 99,
                  transition: 'all 0.25s',
                  transform: menuOpen ? (i===0 ? 'rotate(45deg) translateY(5.5px)' : i===2 ? 'rotate(-45deg) translateY(-5.5px)' : 'none') : 'none',
                  opacity: menuOpen && i===1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: dark ? 'rgba(6,13,26,0.97)' : 'rgba(248,250,252,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, color: 'var(--text-2)', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid var(--border)', fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
