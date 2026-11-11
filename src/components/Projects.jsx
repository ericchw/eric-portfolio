import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, CodeXml, Pause, Play } from 'lucide-react'
import { projects, PROJECT_CATEGORIES } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

const media = (name) => `${import.meta.env.BASE_URL}media/${name}`

function ProjectDrawing({ kind }) {
  if (kind === 'extract')
    return (
      <div className="project-drawing extraction" aria-hidden="true">
        <div className="mini-code">
          <span>supplier.json</span>
          <code>
            <b>{'{'}</b>
            <br />
            &nbsp; product: <em>"…"</em>,<br />
            &nbsp; attributes: <em>[…]</em>
            <br />
            <b>{'}'}</b>
          </code>
        </div>
        <ArrowRight size={27} />
        <div className="mini-table">
          <span>normalized.csv</span>
          {[0, 1, 2, 3].map((i) => (
            <div key={i}>
              <i />
              <i />
              <i />
            </div>
          ))}
        </div>
      </div>
    )
  if (kind === 'containers')
    return (
      <div className="project-drawing containers" aria-hidden="true">
        <div className="container-block">web</div>
        <div className="container-block">database</div>
        <div className="container-block">search</div>
        <div className="container-block">cache</div>
        <div className="container-rail">docker compose up</div>
      </div>
    )
  return (
    <div className="project-drawing shipping" aria-hidden="true">
      <div className="route-point">
        <i /> origin
      </div>
      <div className="route-line">
        <span>carrier APIs</span>
      </div>
      <div className="route-point">
        <i /> destination
      </div>
      <div className="rate-output">request → compare → choose</div>
    </div>
  )
}

function FeaturedProject({ project, motion }) {
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    if (!playing) return
    const timeout = setTimeout(() => setPlaying(false), 24000)
    return () => clearTimeout(timeout)
  }, [playing])
  const showAnimation = motion && playing

  return (
    <article className="featured-project" id="intake-demo">
      <div className="featured-copy">
        <div className="project-kicker">
          <span className="lime-tag">FEATURED DEMO</span>
          <span>BUSINESS PROCESS CASE STUDY</span>
        </div>
        <h3>
          Less re-entry.
          <br />
          <em>More human control.</em>
        </h3>
        <p className="project-name">Clinic Intake Automation</p>
        <p>{project.desc}</p>
        <ol className="workflow-path" aria-label="Intake workflow">
          <li>Receive</li>
          <li>Validate</li>
          <li>Review</li>
          <li>Approve</li>
        </ol>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a
            className="text-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <CodeXml size={16} /> Source & setup <ArrowUpRight size={15} />
          </a>
          <button
            className="text-link"
            onClick={() => setPlaying(!showAnimation)}
            disabled={!motion}
          >
            {showAnimation ? <Pause size={15} /> : <Play size={15} />}
            {showAnimation
              ? 'Stop demo'
              : motion
                ? 'Watch 24s demo'
                : 'Animations paused'}
          </button>
        </div>
        <p className="demo-disclosure">
          Independent portfolio concept. Fictional records, local mock sync; no
          clinic affiliation. Recording uses the Python API and SQLite; Docker
          adds n8n and PostgreSQL.
        </p>
      </div>
      <div className="demo-window">
        <div className="demo-toolbar">
          <span>
            <i /> <i /> <i />
          </span>
          <span>intake-demo / recorded walkthrough</span>
          <span>LOCAL</span>
        </div>
        <div className="demo-screen">
          <img
            src={media(showAnimation ? 'intake-demo.gif' : 'intake-poster.png')}
            width="1200"
            height="1000"
            loading="lazy"
            alt="Real dashboard walkthrough showing three synthetic requests, validation flags, staff review, approval, and reporting."
          />
        </div>
        <div className="demo-caption">
          <span>
            <i className={showAnimation ? 'playing-dot' : ''} />{' '}
            {showAnimation
              ? 'Playing real dashboard capture'
              : 'Real dashboard capture · synthetic data'}
          </span>
          <button
            aria-label={
              showAnimation ? 'Stop demo recording' : 'Play demo recording'
            }
            onClick={() => setPlaying(!showAnimation)}
            disabled={!motion}
          >
            {showAnimation ? <Pause size={15} /> : <Play size={15} />}
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Projects({ motion }) {
  const ref = useReveal()
  const [active, setActive] = useState('All')
  const filtered = projects.filter(
    (project) => active === 'All' || project.categories.includes(active),
  )
  const featured = filtered.find((project) => project.featured)
  return (
    <section
      id="projects"
      className="section projects-section reveal"
      ref={ref}
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">01 / Selected work</div>
            <h2>
              Built to <em>do something.</em>
            </h2>
          </div>
          <p>
            A few things I’ve built to connect data,
            <br />
            simplify workflows, and make work easier.
          </p>
        </div>
        <div className="project-filters" aria-label="Filter projects">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={active === category ? 'active' : ''}
            >
              {category}
              {active === category && <span>↗</span>}
            </button>
          ))}
        </div>
        <div aria-live="polite" className="sr-only">
          {filtered.length} projects shown
        </div>
        {featured && (
          <FeaturedProject
            key={motion ? 'animated' : 'static'}
            project={featured}
            motion={motion}
          />
        )}
        {featured && (
          <div
            className="case-study-notes"
            aria-label="Intake automation case study"
          >
            <div>
              <span>THE WORKFLOW</span>
              <h3>Understand the handoffs.</h3>
              <p>
                Turn form-like submissions into one review queue. Surface
                missing fields and possible duplicates where staff can act on
                them.
              </p>
            </div>
            <div>
              <span>THE IMPLEMENTATION</span>
              <h3>Connect the applications.</h3>
              <p>
                n8n orchestrates the webhook and reporting schedule. Python
                validates records and enforces the approval rules; PostgreSQL
                stores the Docker demo data.
              </p>
            </div>
            <div>
              <span>THE VERIFICATION</span>
              <h3>Make the boundaries visible.</h3>
              <p>
                Check replay protection, blocked approvals, and audit events.
                Nine automated tests cover API behavior and workflow exports;
                staff retain the final approval.
              </p>
            </div>
          </div>
        )}
        <div className="project-grid">
          {filtered
            .filter((project) => !project.featured)
            .map((project) => (
              <article className="project-entry" key={project.title}>
                <a
                  className="project-visual"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ProjectDrawing kind={project.kind} />
                  <span className="project-corner">
                    <ArrowUpRight size={19} />
                  </span>
                </a>
                <div className="project-entry-meta">
                  <span>{project.eyebrow}</span>
                  <CodeXml size={15} />
                </div>
                <h3>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p>{project.desc}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}
