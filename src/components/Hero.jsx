import { useEffect, useRef, useState } from 'react'
import { personal } from '../data/resume'

const TYPED_STRINGS = [
  'Software Engineer',
  'Backend Developer',
  'Automation Builder',
  'ETL Pipeline Architect',
]

function useTypewriter(strings, speed = 70, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[idx % strings.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1))
        if (display.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        setDisplay(current.slice(0, display.length - 1))
        if (display.length - 1 === 0) {
          setDeleting(false)
          setIdx(i => i + 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [display, deleting, idx])

  return display
}

export default function Hero() {
  const typed = useTypewriter(TYPED_STRINGS)

  return (
    <section id="about" style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background mesh */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 70% 50% at 50% -5%, var(--accent-glow) 0%, transparent 65%),
          radial-gradient(ellipse 40% 30% at 85% 15%, rgba(139,92,246,0.05) 0%, transparent 55%)
        `,
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03,
        backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container" style={{ paddingTop: 96, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
        {/* Terminal badge */}
        <div className="fade-up" style={{ animationDelay: '0.0s', marginBottom: 28 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: 'var(--accent)', background: 'var(--accent-dim)',
            border: '1px solid var(--accent-glow)',
            borderRadius: 99, padding: '5px 14px',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 6px rgba(34,197,94,0.6)' }} />
            {personal.location} · Open to work
          </div>
        </div>

        {/* Name */}
        <h1 className="fade-up font-display" style={{
          animationDelay: '0.1s',
          fontSize: 'clamp(3rem, 9vw, 7rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          color: 'var(--text)',
          marginBottom: 20,
        }}>
          Eric Chan
        </h1>

        {/* Typewriter role */}
        <div className="fade-up" style={{ animationDelay: '0.2s', marginBottom: 24, height: 42, display: 'flex', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            color: 'var(--accent)',
            fontWeight: 500,
          }}>
            {typed}
            <span className="cursor-blink" style={{ display: 'inline-block', width: 2, height: '1.1em', background: 'var(--accent)', marginLeft: 2, verticalAlign: 'middle' }} />
          </span>
        </div>

        {/* Bio */}
        <p className="fade-up" style={{
          animationDelay: '0.3s',
          fontSize: '1rem', lineHeight: 1.8,
          color: 'var(--text-3)', maxWidth: 540,
          marginBottom: 40,
        }}>
          {personal.bio}
        </p>

        {/* CTAs */}
        <div className="fade-up" style={{ animationDelay: '0.4s', display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 56 }}>
          {/* <a href={`mailto:${personal.email}`} className="btn btn-primary">
            Get in touch
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a> */}
          <a href="#projects" className="btn btn-outline">View projects</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            GitHub
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            LinkedIn
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </div>

    </section>
  )
}
