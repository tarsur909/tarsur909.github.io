import { socials } from '../data/profile.js'
import { useReveal } from '../useReveal.js'

export default function Intro() {
  const ref = useReveal()
  return (
    <header className="intro reveal" ref={ref} id="about">
      <div className="intro-head">
        <img className="avatar" src="/images/profile-pixel.jpg" alt="Tarun Suresh" />
        <div className="intro-id">
          <h1 className="name">Tarun Suresh</h1>
          <p className="role">
            Ph.D. Student in Computer Science · <strong>Stanford University</strong>
          </p>
          <nav className="socials">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="social-link"
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="bio">
        <p>
          I am a Computer Science Ph.D. student at <strong>Stanford University</strong>, where my
          research is supported by the{' '}
          <a href="https://www.nsfgrfp.org/" target="_blank" rel="noopener noreferrer">
            <strong>NSF Graduate Research Fellowship</strong>
          </a>{' '}
          and the{' '}
          <a href="https://vpge.stanford.edu/fellowships-funding/vpge-fellowships/all-2026-fellows#SGF" target="_blank" rel="noopener noreferrer">
            <strong>Stanford Graduate Fellowship in Science &amp; Engineering (SGF)</strong>
          </a>
          . I graduated <strong>summa cum laude</strong>{' '}
          from the <strong>University of Illinois Urbana-Champaign</strong> in December 2025 with a
          B.S. in Computer Science and Statistics.
        </p>
        <p>
          My work lies at the intersection of <strong>Machine Learning and Systems</strong>. I am
          fortunate to have worked with{' '}
          <a href="https://theory.stanford.edu/~aiken/" target="_blank" rel="noopener noreferrer">
            Prof. Alex Aiken
          </a>{' '}
          (Stanford),{' '}
          <a href="https://misailo.cs.illinois.edu/" target="_blank" rel="noopener noreferrer">
            Prof. Sasa Misailovic
          </a>{' '}
          (UIUC), and{' '}
          <a href="https://ggndpsngh.github.io/" target="_blank" rel="noopener noreferrer">
            Prof. Gagandeep Singh
          </a>{' '}
          (UIUC).
        </p>
        <p>
          My research has introduced novel systems for efficient, provably reliable LLM
          inference, including the first approaches for diffusion LLMs (
          <a href="https://openreview.net/pdf?id=KaYMGsnZ4R" target="_blank" rel="noopener noreferrer">
            <strong>DINGO</strong>
          </a>
          ) and reasoning LLMs (
          <a href="https://openreview.net/pdf?id=wKs9fHYxCV" target="_blank" rel="noopener noreferrer">
            <strong>CRANE</strong>
          </a>
          ); scalable Reinforcement Learning (RL) and Mixture-of-Experts training for agentic
          self-improvement (
          <a href="/images/trace.pdf" target="_blank" rel="noopener noreferrer">
            <strong>TRACE</strong>
          </a>
          ); and verification for LLM systems, including the first practical framework for formally
          evaluating their correctness, security, and safety (
          <a href="https://arxiv.org/pdf/2512.05439" target="_blank" rel="noopener noreferrer">
            <strong>BEAVER</strong>
          </a>
          ).
        </p>
        <p>
          My research has produced state-of-the-art models downloaded{' '}
          <strong>millions of times</strong> by the open-source community (
          <a href="https://huggingface.co/nomic-ai/CodeRankEmbed" target="_blank" rel="noopener noreferrer">
            CodeRankEmbed
          </a>
          ,{' '}
          <a href="https://huggingface.co/nomic-ai/nomic-embed-code" target="_blank" rel="noopener noreferrer">
            Nomic Embed Code
          </a>
          ), and has been featured in{' '}
          <strong>oral and spotlight presentations</strong> and invited talks at top venues and in
          industry.
        </p>
        <p>
          I will be attending <strong>ICML 2026</strong> in Seoul, South Korea.
        </p>
      </div>
    </header>
  )
}
