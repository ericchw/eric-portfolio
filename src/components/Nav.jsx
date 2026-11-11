import { useState } from 'react'
import { ArrowUpRight, Menu, Moon, Pause, Play, Sun, X } from 'lucide-react'

const links = [
  ['Work', '#projects'],
  ['Toolkit', '#skills'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Nav({ dark, setDark, motion, setMotion }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#about"
          aria-label="Eric Chan, back to top"
        >
          ec<span>.</span>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href], i) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <small>0{i + 1}</small>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-controls">
          <button
            className="icon-button"
            onClick={() => setMotion(!motion)}
            aria-label={motion ? 'Pause animations' : 'Enable animations'}
            aria-pressed={!motion}
            title={motion ? 'Pause animations' : 'Enable animations'}
          >
            {motion ? <Pause size={15} /> : <Play size={15} />}
          </button>
          <button
            className="icon-button"
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-contact" href="mailto:ericchw97@hotmail.com">
            Say hello <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button menu-button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
