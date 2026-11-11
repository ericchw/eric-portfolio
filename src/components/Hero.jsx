import { lazy, Suspense } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { personal } from '../data/resume'

const SystemScene = lazy(() => import('./SystemScene'))

function SceneFallback() {
  return (
    <svg className="scene-fallback" viewBox="0 0 560 480" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse
          cx="280"
          cy="235"
          rx="210"
          ry="85"
          transform="rotate(-30 280 235)"
        />
        <ellipse
          cx="280"
          cy="235"
          rx="210"
          ry="85"
          transform="rotate(30 280 235)"
        />
        <ellipse cx="280" cy="235" rx="120" ry="195" />
        <path d="M280 172 340 208V276L280 312 220 276V208ZM220 208 280 244 340 208M280 244V312" />
      </g>
      <g fill="currentColor">
        {[
          [70, 235],
          [455, 170],
          [280, 40],
          [280, 430],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />
        ))}
      </g>
    </svg>
  )
}

export default function Hero({ motion, dark }) {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-topline">
          <span>
            <i className="availability-dot" /> Available for the right
            opportunity
          </span>
          <span>Burnaby, BC / Vancouver area</span>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow fade-up">Eric Chan · Software Engineer</p>
            <h1 className="fade-up">
              I make systems
              <br />
              work <em>together.</em>
            </h1>
            <p className="hero-description fade-up">
              Business applications, API integrations, and workflow automation.
              I work with the people using a system, build the missing pieces,
              and check that the result works in practice.
            </p>
            <div className="hero-actions fade-up">
              <a className="btn btn-primary" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a
                className="text-link"
                href={personal.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="code-comment">
                // built around real business problems
              </span>
              <span>Python · C# · APIs · Automation</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="scene-topline">
              <span>FIG. 01 / CONNECTED SYSTEMS</span>
              <span className="scene-status">
                {motion ? 'IN MOTION' : 'STILL FRAME'}
              </span>
            </div>
            <div className="scene-stage">
              <SceneFallback />
              {motion && (
                <Suspense fallback={null}>
                  <SystemScene dark={dark} />
                </Suspense>
              )}
              <span className="scene-label label-input">01 / inputs</span>
              <span className="scene-label label-logic">
                02 / business logic
              </span>
              <span className="scene-label label-output">
                03 / useful output
              </span>
            </div>
            <div className="scene-caption">
              <span>Good software connects the dots.</span>
              <span>Move your cursor ↗</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>SELECTED WORK, ONGOING CURIOSITY.</span>
          <a href="#projects">
            Scroll to explore <ArrowDown size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
