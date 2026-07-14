import Reveal from './Reveal.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">// 03. skills</span>
          <h2 className="section-title">The toolbox.</h2>
          <p className="section-intro">
            Technologies I reach for — grouped by where they live in the stack.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skills.map((cat, i) => (
            <Reveal key={cat.group} delay={0.06 * i} className="skills__card">
              <div className="skills__card-head">
                <span className="prompt">$</span>
                <span className="skills__card-title">{cat.group}</span>
                <span className="skills__card-count">{cat.items.length}</span>
              </div>
              <div className="skills__tags">
                {cat.items.map((s) => (
                  <span className="skills__tag" key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
