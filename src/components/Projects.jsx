import { useState } from 'react'
import { projects, PROJECT_CATEGORIES } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

export default function Projects() {
  const ref = useReveal()
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.categories.includes(active))

  return (
    <section id="projects" style={{ padding: '6rem 0' }} className="reveal" ref={ref}>
      <div className="container">
        <div className="eyebrow reveal-item">Work</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
          <h2 className="section-title reveal-item" style={{ margin: 0 }}>Projects & Experience</h2>
          {/* Filter pills */}
          <div className="reveal-item" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {PROJECT_CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} className={`pill${active === cat ? ' active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((p, i) => (
            <article key={`${active}-${p.title}`} className="card" style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'default', animation: 'fadeUp 0.35s ease both', animationDelay: `${i * 60}ms` }}>
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{p.icon}</span>
                {/* <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-4)', textDecoration: 'none', transition: 'color 0.2s', padding: 4 }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-4)'}>
                  <GithubIcon />
                </a> */}
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1rem', color: 'var(--text)', margin: 0, lineHeight: 1.3 }}>{p.title}</h3>

              {/* Desc */}
              <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>{p.desc}</p>

              {/* Stat */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', background: 'var(--accent-dim)', border: '1px solid var(--accent-glow)', borderRadius: 8, padding: '5px 10px', width: 'fit-content' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                {p.highlight}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map(t => <span key={t} className="chip-gray">{t}</span>)}
              </div>

              {/* Footer */}
              {/* <a href={p.github} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, color: 'var(--text-4)', textDecoration: 'none', paddingTop: 12, borderTop: '1px solid var(--border)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-4)'}>
                <GithubIcon /> View on GitHub
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ marginLeft: 'auto' }}><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
