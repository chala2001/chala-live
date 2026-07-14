import Reveal from './Reveal.jsx'
import { certifications, profile } from '../data/profile.js'
import { ArrowIcon } from './Icons.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="section-label">// 04. certifications</span>
          <h2 className="section-title">Verified &amp; always learning.</h2>
          <p className="section-intro">
            {certifications.length} credentials across cloud, DevOps and AI — the highlighted
            ones are the ones I'm proudest of.
          </p>
        </Reveal>

        <div className="certs__grid">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={Math.min(i * 0.03, 0.3)}>
              <div className={`cert ${c.highlight ? 'cert--star' : ''}`}>
                <div className="cert__head">
                  <span className="cert__marker prompt">▹</span>
                  {c.badge && <span className="cert__badge">{c.badge}</span>}
                </div>
                <h3 className="cert__name">{c.name}</h3>
                <div className="cert__meta">
                  <span className="cert__issuer">{c.issuer}</span>
                  <span className="cert__date">{c.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="certs__more">
          <a href={profile.certificationsUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Verify all credentials on LinkedIn <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
