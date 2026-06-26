import { useEffect, useRef, useState } from 'react'
import { highlights } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

function CountUp({ target, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      observer.disconnect()
      const num = parseFloat(target)
      if (isNaN(num)) { setVal(target); return }
      const dur = 1200
      const start = performance.now()
      const animate = (now) => {
        const p = Math.min((now - start) / dur, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        setVal((num * ease).toFixed(target.includes('.') ? 1 : 0))
        if (p < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{val}{suffix}</span>
}

const STATS = [
  { value: '99', suffix: '%+', label: 'Manual workload reduced', desc: 'via Python automation pipelines' },
  { value: '3', suffix: '+',  label: 'Years of experience',        desc: 'Large-scale business system' },
  { value: '6',    suffix: '+',  label: 'Years of experience',    desc: 'Across Infra, Ops and Dev' },
]

export default function Highlights() {
  const ref = useReveal()
  return (
    <section style={{ padding: '6rem 0' }} className="reveal" ref={ref}>
      <div className="container">
        <div className="eyebrow reveal-item">Impact</div>
        <h2 className="section-title reveal-item" style={{ marginBottom: '3rem' }}>By the numbers</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'var(--border)', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          {STATS.map((s, i) => (
            <div key={s.label} className="reveal-item" style={{
              background: 'var(--bg-card)',
              padding: '2.2rem 1.8rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, var(--accent) ${i * 25}%, transparent 100%)`, opacity: 0.6 }} />
              <div className="stat-number font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 6 }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: 'var(--text-4)', fontFamily: 'JetBrains Mono, monospace' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
