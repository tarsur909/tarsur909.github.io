import { talks } from '../data/talks.js'
import { useReveal } from '../useReveal.js'

function TalkItem({ t }) {
  return (
    <article className="talk-item">
      <div className="talk-body">
        <h3 className="talk-title">
          {t.href ? (
            <a href={t.href} target="_blank" rel="noopener noreferrer">
              {t.title}
            </a>
          ) : (
            t.title
          )}
        </h3>
        <p className="talk-venue">{t.venue}</p>
      </div>
      {t.date ? <span className="talk-date">{t.date}</span> : null}
    </article>
  )
}

export default function Talks() {
  const ref = useReveal()
  return (
    <section className="section" id="talks">
      <div className="reveal" ref={ref}>
        <h2 className="section-title">Selected Invited Talks</h2>
        <div className="talk-list">
          {talks.map((t) => (
            <TalkItem key={t.title} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
