import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Highlights() {
  const ref = useReveal()
  return (
    <section className="approach-section reveal" ref={ref}>
      <div className="container approach-layout">
        <div>
          <p className="eyebrow">Business applications / process improvement</p>
          <h2>
            Software for how
            <br />
            people <em>actually work.</em>
          </h2>
        </div>
        <div className="approach-notes">
          <div>
            <span>01</span>
            <h3>Start with the workflow.</h3>
            <p>
              I work with operations teams to understand the steps, exceptions,
              and handoffs before automating them.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Make the data trustworthy.</h3>
            <p>
              Transform, validate, and reconcile. At Swivel, SQL query
              improvements reduced data-processing time by 25%.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Follow through after release.</h3>
            <p>
              Regression checks, deployment verification, production
              troubleshooting, and documentation are part of the work.
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>Use AI, then verify the work.</h3>
            <p>
              I use Claude Code and Codex with MCP servers, plugins, and
              reusable skills for development, debugging, and test preparation.
              I review the changes and check the result against the
              requirements.
            </p>
          </div>
          <a className="text-link" href="#experience">
            The experience behind it <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
