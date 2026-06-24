import { publications } from '../data/publications.js'
import { useReveal } from '../useReveal.js'
import { StarIcon } from './Icons.jsx'

const statusMeta = {
  oral: { label: 'Oral', Icon: StarIcon },
  spotlight: { label: 'Spotlight', Icon: StarIcon },
}

function StatusFlag({ status }) {
  const meta = statusMeta[status]
  if (!meta) return null
  const { label, Icon } = meta
  return (
    <span className={`pub-flag ${status}`}>
      <Icon />
      {label}
    </span>
  )
}

function Authors({ authors }) {
  return (
    <p className="pub-authors">
      {authors.map((a, i) => (
        <span key={i}>
          <span className={a.me ? 'pub-me' : undefined}>{a.name}</span>
          {a.eq ? '*' : ''}
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  )
}

function PaperCard({ p }) {
  return (
    <article className="pub-card">
      <div className="pub-thumb">
        {p.thumb ? (
          <img src={p.thumb} alt={p.title} loading="lazy" />
        ) : (
          <span className="pub-thumb-placeholder">{p.placeholder}</span>
        )}
      </div>
      <div className="pub-body">
        <h3 className="pub-title">{p.title}</h3>
        <Authors authors={p.authors} />
        <p className="pub-venue">
          <em>{p.venue}</em>
          <StatusFlag status={p.status} />
        </p>
        <div className="pub-links">
          {p.links.map((l) => (
            <a className="pub-link" key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Publications() {
  const ref = useReveal()
  return (
    <section className="section" id="publications">
      <div className="reveal" ref={ref}>
        <h2 className="section-title">Selected Publications</h2>
        <p className="pub-note pub-note-top">* denotes equal contribution.</p>
        <div className="pub-list">
          {publications.map((p) => (
            <PaperCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
