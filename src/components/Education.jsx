import { education, certifications } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()
  return (
    <section
      id="education"
      className="section education-section reveal"
      ref={ref}
    >
      <div className="container education-layout">
        <div>
          <div className="eyebrow">04 / Foundations</div>
          <h2>
            Always <em>learning.</em>
          </h2>
          <p className="education-note">
            Formal foundations, followed by plenty of learning on the job.
          </p>
        </div>
        <div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.school}>
                <span className="row-index">{item.year}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
          <div className="certifications">
            {certifications.map((item) => (
              <div key={item.name}>
                <span className="cert-mark">↗</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.org}
                    {item.org && ' · '}
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
