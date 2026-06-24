// Publication records. `me` flags Tarun in the author list; `eq` appends the
// equal-contribution asterisk. `status` renders a colored (Oral)/(Spotlight)
// flag before the title. `thumb` is null for entries that use a text placeholder.
export const publications = [
  {
    title: 'TRACE: Capability-Targeted Agentic Training',
    authors: [
      { name: 'Hangoo Kang', eq: true },
      { name: 'Tarun Suresh', me: true, eq: true },
      { name: 'Jon Saad-Falcon' },
      { name: 'Azalia Mirhoseini' },
    ],
    venue: 'AIWild Workshop @ ICML 2026',
    status: 'spotlight',
    thumb: '/images/trace.png',
    placeholder: 'TRACE',
    links: [
      { label: 'pdf', href: '/images/trace.pdf' },
      { label: 'blog', href: 'https://scalingintelligence.stanford.edu/blogs/trace/' },
      { label: 'code', href: 'https://github.com/ScalingIntelligence/TRACE' },
    ],
  },
  {
    title: 'DINGO: Constrained Inference for Diffusion LLMs',
    authors: [
      { name: 'Tarun Suresh', me: true, eq: true },
      { name: 'Debangshu Banerjee', eq: true },
      { name: 'Shubham Ugare' },
      { name: 'Sasa Misailovic' },
      { name: 'Gagandeep Singh' },
    ],
    venue: 'NeurIPS 2025',
    thumb: '/images/dingo.png',
    links: [
      { label: 'pdf', href: 'https://openreview.net/pdf?id=KaYMGsnZ4R' },
      { label: 'website', href: 'https://structuredllm.com/' },
    ],
  },
  {
    title: 'BEAVER: An Efficient Deterministic LLM Verifier',
    authors: [
      { name: 'Tarun Suresh', me: true, eq: true },
      { name: 'Nalin Wadhwa', eq: true },
      { name: 'Debangshu Banerjee' },
      { name: 'Gagandeep Singh' },
    ],
    venue: 'VerifAI Workshop @ ICLR 2026',
    status: 'oral',
    thumb: '/images/beaver.png',
    links: [
      { label: 'pdf', href: 'https://arxiv.org/pdf/2512.05439' },
      { label: 'website', href: 'https://beaverframework.pages.dev/' },
      { label: 'code', href: 'https://github.com/BeaverFramework/Beaver' },
    ],
  },
  {
    title: 'CRANE: Reasoning with Constrained LLM Generation',
    authors: [
      { name: 'Debangshu Banerjee', eq: true },
      { name: 'Tarun Suresh', me: true, eq: true },
      { name: 'Shubham Ugare' },
      { name: 'Sasa Misailovic' },
      { name: 'Gagandeep Singh' },
    ],
    venue: 'ICML 2025',
    thumb: '/images/crane.png',
    links: [
      { label: 'pdf', href: 'https://openreview.net/pdf?id=wKs9fHYxCV' },
      { label: 'website', href: 'https://structuredllm.com/' },
      { label: 'code', href: 'https://github.com/uiuc-focal-lab/CRANE' },
    ],
  },
  {
    title: 'CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking',
    authors: [
      { name: 'Tarun Suresh', me: true, eq: true },
      { name: 'Revanth Gangi Reddy', eq: true },
      { name: 'Yifei Xu' },
      { name: 'Zach Nussbaum' },
      { name: 'Andriy Mulyar' },
      { name: 'Brandon Duderstadt' },
      { name: 'Heng Ji' },
    ],
    venue: 'ICLR 2025',
    thumb: '/images/cornstack.png',
    links: [
      { label: 'pdf', href: 'https://openreview.net/pdf?id=iyJOUELYir' },
      { label: 'blog', href: 'https://gangiswag.github.io/cornstack' },
      { label: 'code', href: 'https://github.com/gangiswag/cornstack' },
    ],
  },
  {
    title: 'Quokka: Accelerating Program Verification with LLMs via Invariant Synthesis',
    authors: [
      { name: 'Anjiang Wei' },
      { name: 'Tarun Suresh', me: true },
      { name: 'Tianran Sun' },
      { name: 'Haoze Wu' },
      { name: 'Ke Wang' },
      { name: 'Alex Aiken' },
    ],
    venue: 'VerifAI Workshop @ ICLR 2026',
    status: 'oral',
    thumb: '/images/invbench.png',
    links: [
      { label: 'pdf', href: 'https://arxiv.org/pdf/2509.21629' },
      { label: 'code', href: 'https://github.com/Anjiang-Wei/Quokka' },
    ],
  },
  {
    title: 'Is Watermarking LLM-Generated Code Robust?',
    authors: [
      { name: 'Tarun Suresh', me: true },
      { name: 'Shubham Ugare' },
      { name: 'Gagandeep Singh' },
      { name: 'Sasa Misailovic' },
    ],
    venue: 'Tiny Papers Track @ ICLR 2024',
    status: 'oral',
    thumb: '/images/lpw.png',
    links: [
      { label: 'pdf', href: 'https://arxiv.org/pdf/2403.17983.pdf' },
      { label: 'code', href: 'https://github.com/uiuc-arc/llm-code-watermark' },
    ],
  },
]
