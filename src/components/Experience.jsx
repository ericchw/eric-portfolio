import { experience } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const ref = useReveal()
  return (
    <section id="experience" style={{ padding: '6rem 0' }} className="reveal" ref={ref}>
      <div className="container">
        <div className="eyebrow reveal-item">Work history</div>
        <h2 className="section-title reveal-item" style={{ marginBottom: '3rem' }}>Experience</h2>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {experience.map((job, idx) => (
            <div key={job.company} className="card reveal-item" style={{ padding: '1.6rem 1.8rem', transition: 'all 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-glow)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = ''}>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', margin: 0 }}>{job.company}</h3>
                    {job.current && (
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#22C55E', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 99, padding: '2px 9px', letterSpacing: '0.05em' }}>
                        ● NOW
                      </span>
                    )}
                  </div>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', margin: 0, letterSpacing: '0.04em' }}>{job.role}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-3)', margin: 0 }}>{job.period}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-4)', margin: '3px 0 0' }}>{job.location}</p>
                </div>
              </div>

              {job.stack.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                  {job.stack.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              )}

              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {job.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: '0.84rem', color: 'var(--text-3)', lineHeight: 1.65 }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, fontSize: 11, marginTop: 3, fontFamily: 'JetBrains Mono' }}>▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
