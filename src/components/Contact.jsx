import { personal } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" style={{ padding: '6rem 0' }} className="reveal" ref={ref}>
      <div className="container">
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow reveal-item" style={{ justifyContent: 'center' }}>Let's connect</div>
          <h2 className="section-title reveal-item" style={{ marginBottom: 16, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Open to new<br/>
            <span style={{ color: 'var(--accent)' }}>opportunities</span>
          </h2>
          <p className="reveal-item" style={{ fontSize: '1rem', color: 'var(--text-3)', lineHeight: 1.8, marginBottom: 40, maxWidth: 460, margin: '0 auto 40px' }}>
            {personal.openTo} Feel free to reach out — I'd love to chat.
          </p>
          <div className="reveal-item" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 48 }}>
            <a href={`mailto:${personal.email}`} className="btn btn-primary">{personal.email}</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn ↗</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub ↗</a>
          </div>

          {/* Terminal card */}
          <div className="card reveal-item" style={{ padding: 0, textAlign: 'left', overflow: 'hidden', maxWidth: 480, margin: '0 auto' }}>
            <div style={{ background: 'var(--bg-card2)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid var(--border)' }}>
              {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-4)', marginLeft: 8 }}>contact.sh</span>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, lineHeight: 2, color: 'var(--text-3)' }}>
              {/* <div><span style={{ color: 'var(--accent)' }}>$</span> <span style={{ color: 'var(--text-2)' }}>echo</span> $EMAIL</div> */}
              {/* <div style={{ color: 'var(--text-4)', paddingLeft: 14 }}>{personal.email}</div>
              <div style={{ marginTop: 4 }}><span style={{ color: 'var(--accent)' }}>$</span> <span style={{ color: 'var(--text-2)' }}>echo</span> $PHONE</div>
              <div style={{ color: 'var(--text-4)', paddingLeft: 14 }}>{personal.phone}</div> */}
              <div style={{ marginTop: 4 }}><span style={{ color: 'var(--accent)' }}>$</span> <span style={{ color: 'var(--text-2)' }}>echo</span> $LinkedIn</div>
              <div style={{ color: 'var(--text-4)', paddingLeft: 14 }}>{personal.linkedin}<span className="cursor-blink" style={{ display: 'inline-block', width: 8, height: 14, background: 'var(--accent)', marginLeft: 4, verticalAlign: 'middle', opacity: 0.8 }} /></div>
              <div style={{ marginTop: 4 }}><span style={{ color: 'var(--accent)' }}>$</span> <span style={{ color: 'var(--text-2)' }}>echo</span> $LOCATION</div>
              <div style={{ color: 'var(--text-4)', paddingLeft: 14 }}>{personal.location}<span className="cursor-blink" style={{ display: 'inline-block', width: 8, height: 14, background: 'var(--accent)', marginLeft: 4, verticalAlign: 'middle', opacity: 0.8 }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
