import Reveal from './Reveal.jsx'
import { openSource } from '../data/profile.js'
import { GitHubIcon, ArrowIcon } from './Icons.jsx'

export default function OpenSource() {
  return (
    <section id="opensource" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">// 03. open source</span>
          <h2 className="section-title">Open source contributions.</h2>
          <p className="section-intro">
            Code I've sent upstream to projects I use, reviewed and merged by the
            people who maintain them.
          </p>
        </Reveal>

        <div className="oss__grid">
          {openSource.map((p, i) => (
            <Reveal key={p.name} delay={0.06 * i} className="oss__card">
              <div className="oss__head">
                <div className="oss__title">
                  <a href={p.url} target="_blank" rel="noreferrer">
                    <GitHubIcon width="18" height="18" /> {p.name}{' '}
                    <ArrowIcon className="oss__arrow" />
                  </a>
                  <span className="oss__stars">{p.stars}</span>
                </div>
                <span className="oss__badge">{p.badge}</span>
              </div>

              <div className="oss__org">
                <span className="prompt">@</span> {p.org}
              </div>

              <ul className="oss__list">
                {p.highlights.map((h, j) => (
                  <li key={j}>
                    <span className="oss__bullet">▹</span> {h}
                  </li>
                ))}
              </ul>

              <div className="oss__footer">
                <span className="oss__prs-label">merged</span>
                {p.prs.map((pr) => (
                  <a
                    key={pr.id}
                    href={pr.url}
                    target="_blank"
                    rel="noreferrer"
                    className="oss__pr"
                  >
                    {pr.id}
                  </a>
                ))}
              </div>

              <div className="oss__tags">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
