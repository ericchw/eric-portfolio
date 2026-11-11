import { skills } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" className="section reveal" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / Toolkit</div>
            <h2>
              The tools behind <em>the work.</em>
            </h2>
          </div>
          <p>
            Chosen for the problem.
            <br />
            Used across applications, data, and delivery.
          </p>
        </div>
        <div className="skill-rows">
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill.group}>
              <span className="row-index">0{index + 1}</span>
              <h3>{skill.group}</h3>
              <div className="tag-list">
                {skill.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
