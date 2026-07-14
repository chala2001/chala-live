import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <Reveal>
          <span className="section-label">// 06. contact</span>
          <h2 className="section-title contact__title">Let's build something.</h2>
          <p className="contact__text">
            I'm actively looking for <strong>Software Engineering, DevOps &amp; SRE</strong>{' '}
            opportunities. If you have a role, a project, or just want to talk shop about
            infrastructure and AI agents — my inbox is open.
          </p>

          <a href={profile.socials.email} className="btn btn-primary contact__cta">
            <MailIcon width="18" height="18" /> {profile.email}
          </a>

          <div className="contact__socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="contact__social">
              <GitHubIcon /> <span>GitHub</span> <ArrowIcon />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="contact__social">
              <LinkedInIcon /> <span>LinkedIn</span> <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
