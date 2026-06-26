import { personal } from '../data/resume'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-4)' }}>
          © {new Date().getFullYear()} {personal.name} · React + Vite + Tailwind
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { l: 'GitHub',   h: personal.github },
            { l: 'LinkedIn', h: personal.linkedin },
            { l: 'Email',    h: `mailto:${personal.email}` },
          ].map(({ l, h }) => (
            <a key={l} href={h} target={h.startsWith('m') ? undefined : '_blank'} rel="noopener noreferrer"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-4)'}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
