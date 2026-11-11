import { experience } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const ref = useReveal()
  return (
    <section
      id="experience"
      className="section experience-section reveal"
      ref={ref}
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / Experience</div>
            <h2>
              A little context.
              <br />
              <em>A lot of hands-on work.</em>
            </h2>
          </div>
          <p>
            Business applications, operational automation,
            <br />
            and the systems that keep them running.
          </p>
        </div>
        <div className="experience-list">
          {experience.map((job) => (
            <article className="experience-row" key={job.company}>
              <div className="experience-date">
                <span>{job.period}</span>
                {job.current && (
                  <span className="current-label">
                    <i /> CURRENT
                  </span>
                )}
              </div>
              <div className="experience-description">
                <h3>{job.company}</h3>
                <p className="job-role">{job.role}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
