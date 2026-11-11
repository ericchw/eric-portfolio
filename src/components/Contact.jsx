import { ArrowUpRight } from 'lucide-react'
import { personal } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="contact-section reveal" ref={ref}>
      <div className="container">
        <div className="contact-top">
          <span className="eyebrow">05 / What’s next?</span>
          <span>BASED IN BURNABY, BC</span>
        </div>
        <h2>
          Have something
          <br />
          worth <em>building?</em>
        </h2>
        <div className="contact-bottom">
          <div>
            <p>{personal.openTo}</p>
            <a className="contact-email" href={`mailto:${personal.email}`}>
              {personal.email} <ArrowUpRight size={25} />
            </a>
          </div>
          <div className="contact-socials">
            <a href={personal.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={17} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
