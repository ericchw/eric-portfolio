import { skills } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

const ICONS = {
  'Languages':       '{ }',
  'Frameworks':      '⚙',
  'Databases':       '🗄',
  'Cloud & DevOps':  '☁',
  'Automation & ETL':'⚡',
  'APIs & Web':      '🔗',
}

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" style={{ padding: '6rem 0' }} className="reveal" ref={ref}>
      <div className="container">
        <div className="eyebrow reveal-item">Toolkit</div>
        <h2 className="section-title reveal-item" style={{ marginBottom: '3rem' }}>Skills</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {skills.map((s, i) => (
            <div key={s.group} className="card reveal-item" style={{ padding: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent-dim)', border: '1px solid var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: s.group === 'Languages' ? 12 : 15, fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent)', flexShrink: 0 }}>
                  {ICONS[s.group]}
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>{s.group}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {s.tags.map(t => <span key={t} className="chip-gray">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
