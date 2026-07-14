import Reveal from './Reveal.jsx'
import { about, education } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">// 01. about</span>
          <h2 className="section-title">Engineer across the full stack — and the full lifecycle.</h2>
        </Reveal>

        <div className="about__grid">
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={0.05 * i} className="about__p">
                {p}
              </Reveal>
            ))}

            <Reveal delay={0.15} className="about__edu">
              <span className="about__edu-label"><span className="prompt">$</span> education</span>
              {education.map((e) => (
                <div className="about__edu-item" key={e.school}>
                  <div className="about__edu-top">
                    <strong>{e.degree}</strong>
                    <span className="chip">{e.period}</span>
                  </div>
                  <div className="about__edu-sub">
                    {e.school} · <span className="about__edu-gpa">{e.detail}</span>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="about__stats">
            {about.stats.map((s) => (
              <div className="about__stat" key={s.label}>
                <div className="about__stat-value">{s.value}</div>
                <div className="about__stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
