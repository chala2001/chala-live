import Reveal from './Reveal.jsx'
import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="section-label">// 02. experience</span>
          <h2 className="section-title">Where I've been building.</h2>
          <p className="section-intro">
            Real production and internship work — not just coursework.
          </p>
        </Reveal>

        <div className="exp__timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.role} delay={0.05 * i} className="exp__item">
              <span className="exp__node" aria-hidden />
              <div className="exp__card">
                <div className="exp__head">
                  <div>
                    <h3 className="exp__role">{job.role}</h3>
                    <div className="exp__company">
                      <span className="exp__at prompt">@</span> {job.company}
                      <span className="exp__type chip">{job.type}</span>
                    </div>
                  </div>
                  <div className="exp__meta">
                    <span className="exp__period">{job.period}</span>
                    {job.location && <span className="exp__location">{job.location}</span>}
                  </div>
                </div>

                <p className="exp__summary">{job.summary}</p>

                <ul className="exp__list">
                  {job.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="exp__bullet">▹</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="exp__stack">
                  {job.stack.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
