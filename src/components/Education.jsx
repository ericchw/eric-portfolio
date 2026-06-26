import { education, certifications } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()
  return (
    <section id="education" style={{ padding: '6rem 0' }} className="reveal" ref={ref} minHeight="100vh">
      <div className="container">
        <div className="eyebrow reveal-item">Background</div>
        <h2 className="section-title reveal-item" style={{ marginBottom: '3rem' }}>Education & Certifications</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          {education.map(e => (
            <div key={e.school} className="card reveal-item" style={{ padding: '1.5rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 10 }}>{e.year}</div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 5 }}>{e.school}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.6, margin: 0 }}>{e.degree}<br/>{e.field}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {certifications.map(c => (
            <div key={c.code} className="card reveal-item" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: 14, flex: '1 1 280px' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-dim)', border: '1px solid var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 3 }}>{c.code}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>{c.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
