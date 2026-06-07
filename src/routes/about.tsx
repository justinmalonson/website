import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Justin Malonson | Software Engineer & Blockchain Architect" },
      {
        name: "description",
        content:
          "Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a Blockchain Architect. Learn about his work on decentralized identity, privacy, cryptography, and Web5 infrastructure.",
      },
      {
        property: "og:title",
        content: "Justin Malonson | Software Engineer & Blockchain Architect",
      },
      {
        property: "og:description",
        content:
          "Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a Blockchain Architect. Learn about his work on decentralized identity, privacy, cryptography, and Web5 infrastructure.",
      },
      { property: "og:url", content: "https://justinmalonson.com/about" },
      { property: "og:type", content: "profile" },
      {
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/blockchaincomputer/brand/refs/heads/main/justin_malonson.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://raw.githubusercontent.com/blockchaincomputer/brand/refs/heads/main/justin_malonson.png",
      },
      { name: "twitter:site", content: "@justinmalonson" },
      { name: "twitter:creator", content: "@justinmalonson" },
    ],
    links: [{ rel: "canonical", href: "https://justinmalonson.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://justinmalonson.com/#person",
          name: "Justin Malonson",
          url: "https://justinmalonson.com/about",
          image:
            "https://raw.githubusercontent.com/blockchaincomputer/brand/refs/heads/main/justin_malonson.png",
          jobTitle: "Founder & CEO, Blockchain Computer Inc.",
          description:
            "Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a Blockchain Architect.",
          worksFor: {
            "@type": "Organization",
            "@id": "https://blockchaincomputer.com/#organization",
            name: "Blockchain Computer Inc.",
            url: "https://blockchaincomputer.com",
          },
          founder: {
            "@type": "Organization",
            "@id": "https://blockchaincomputer.com/#organization",
            name: "Blockchain Computer Inc.",
          },
          knowsAbout: [
            "Decentralized Systems",
            "Digital Identity",
            "Privacy-Preserving Technologies",
            "Cryptography",
            "Blockchain Infrastructure",
            "Verifiable Computation",
            "AI Governance",
            "Zero-Knowledge Proofs",
            "Web5",
            "Distributed Systems",
          ],
          sameAs: [
            "https://www.linkedin.com/in/justin-malonson",
            "https://x.com/justinmalonson",
            "https://github.com/justinmalonson",
            "https://t.me/justinmalonson",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Myrtle Beach",
            addressRegion: "South Carolina",
            addressCountry: "US",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://justinmalonson.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About",
              item: "https://justinmalonson.com/about",
            },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const research = [
  {
    title: "Decentralized Systems",
    body: "Designing resilient peer-to-peer architectures and consensus protocols that operate without trusted intermediaries.",
  },
  {
    title: "Digital Identity",
    body: "Building self-sovereign identity frameworks where individuals own and control their credentials and personal data.",
  },
  {
    title: "Privacy-Preserving Technologies",
    body: "Applying zero-knowledge proofs, secure multi-party computation, and selective disclosure to protect sensitive information.",
  },
  {
    title: "Cryptography",
    body: "Researching modern cryptographic primitives, key management, and protocol design for verifiable, censorship-resistant systems.",
  },
  {
    title: "Blockchain Infrastructure",
    body: "Architecting scalable distributed ledgers, execution layers, and interoperability frameworks for the next generation of the web.",
  },
  {
    title: "Verifiable Computation",
    body: "Building systems where computation can be cryptographically proven correct without re-executing or trusting the operator.",
  },
  {
    title: "AI Governance",
    body: "Exploring frameworks for accountability, transparency, and human oversight in autonomous and agentic AI systems.",
  },
];

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justin-malonson",
    handle: "in/justin-malonson",
  },
  { label: "X", href: "https://x.com/justinmalonson", handle: "@justinmalonson" },
  { label: "GitHub", href: "https://github.com/justinmalonson", handle: "justinmalonson" },
  { label: "Telegram", href: "https://t.me/justinmalonson", handle: "@justinmalonson" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="px-5 pt-16 md:px-8 md:pt-28">
        <nav aria-label="breadcrumb" className="label mb-6">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link
                to="/"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li className="text-muted-foreground" aria-hidden="true">
              /
            </li>
            <li className="text-foreground" aria-current="page">
              About
            </li>
          </ol>
        </nav>
        <div className="flex flex-col gap-10 md:flex-row md:items-end">
          <h1 className="display flex-1 text-4xl leading-[1.05] sm:text-5xl md:text-7xl md:leading-[0.95] lg:text-8xl">
            Software Engineer & Blockchain Architect
          </h1>
          <div className="hero-profile-image-wrapper shrink-0">
            <img
              src="https://raw.githubusercontent.com/blockchaincomputer/brand/refs/heads/main/justin_malonson.png"
              alt="Justin Malonson — Founder and CEO of Blockchain Computer Inc."
              width={960}
              height={1200}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-foreground pt-5 text-sm md:grid-cols-3">
          <p className="md:col-span-2 max-w-2xl">
            Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a
            Blockchain Architect. He leads a research and engineering company building cryptographic
            infrastructure for decentralized identity, verifiable computation, and sovereign data
            systems.
          </p>
          <p className="md:text-right">Founder & CEO — Blockchain Computer Inc.</p>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mb-12 flex items-end justify-between border-b border-foreground pb-6">
          <h2 className="display text-3xl sm:text-4xl md:text-6xl">Professional Summary</h2>
          <span className="text-xs text-muted-foreground">01 / Summary</span>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <p className="text-lg leading-relaxed md:col-span-2">
            Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a
            Blockchain Architect whose work centers on the foundations of digital sovereignty. As
            Founder and CEO of Blockchain Computer Inc., he leads research and engineering programs
            at the intersection of distributed systems, cryptography, and artificial intelligence —
            designing infrastructure that lets people, institutions, and machines transact, compute,
            and prove things to one another without surrendering control to centralized
            intermediaries.
          </p>
          <div className="space-y-6 text-sm">
            <div className="border-t border-foreground pt-5">
              <p className="label text-muted-foreground">Role</p>
              <p className="mt-2">Founder & CEO, Blockchain Computer Inc.</p>
            </div>
            <div className="border-t border-foreground pt-5">
              <p className="label text-muted-foreground">Disciplines</p>
              <p className="mt-2">Cryptography · Distributed Systems · AI Governance</p>
            </div>
            <div className="border-t border-foreground pt-5">
              <p className="label text-muted-foreground">Based</p>
              <p className="mt-2">United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="border-t border-foreground bg-foreground px-5 py-20 text-background md:px-8 md:py-32">
        <div className="mb-12 flex items-end justify-between border-b border-background/30 pb-6">
          <h2 className="display text-3xl sm:text-4xl md:text-6xl">Founder Story</h2>
          <span className="text-xs text-background/60">02 / Story</span>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-background/85">
            <p>
              Justin's path into computer science began with an early fascination for how networks,
              code, and cryptography quietly shape the modern world. Long before founding Blockchain
              Computer Inc., he was building software, studying the architecture of the internet,
              and exploring how cryptographic systems could shift power back toward individuals.
            </p>
            <p>
              Years of independent research and hands-on engineering convinced him that the
              internet's next chapter would not be defined by larger platforms or faster servers,
              but by sovereignty — the ability of users to own their identity, control their data,
              and verify computation without trusting a third party.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-background/85">
            <p>
              He founded Blockchain Computer Inc. to pursue that thesis at the infrastructure level.
              The company brings together cryptography, distributed systems, and AI research to
              design the protocols and primitives needed for a more open, verifiable, and resilient
              digital economy.
            </p>
            <p>
              Today, Justin works alongside engineers, researchers, and founders to translate that
              vision into shipping technology — protocols, products, and standards engineered to
              last beyond a single platform cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Expertise */}
      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mb-12 flex items-end justify-between border-b border-foreground pb-6">
          <h2 className="display text-3xl sm:text-4xl md:text-6xl">
            Areas of Research & Expertise
          </h2>
          <span className="text-xs text-muted-foreground">03 / Research</span>
        </div>
        <div className="grid grid-cols-1 gap-px bg-foreground md:grid-cols-2 lg:grid-cols-3">
          {research.map((r) => (
            <article key={r.title} className="flex flex-col bg-background p-8 md:p-10">
              <div className="mb-8 h-8 w-8 border border-foreground" />
              <h3 className="display mb-3 text-2xl md:text-3xl">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Current Projects */}
      <section className="border-t border-foreground px-5 py-20 md:px-8 md:py-32">
        <div className="mb-12 flex items-end justify-between border-b border-foreground pb-6">
          <h2 className="display text-3xl sm:text-4xl md:text-6xl">Current Projects</h2>
          <span className="text-xs text-muted-foreground">04 / Now</span>
        </div>
        <div className="grid grid-cols-1 gap-px bg-foreground md:grid-cols-2">
          <article className="flex flex-col bg-background p-8 md:p-10">
            <p className="label mb-4 text-muted-foreground">Active</p>
            <h3 className="display mb-4 text-3xl md:text-4xl">Blockchain Computer Inc.</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Leading the company's research and engineering roadmap across decentralized identity,
              verifiable computation, and cryptographic infrastructure for sovereign digital
              systems.
            </p>
            <ul className="space-y-3 border-t border-foreground pt-5 text-sm">
              <li className="flex justify-between border-b border-foreground/20 pb-3">
                <span>Sovereign Identity Protocols</span>
                <span className="text-muted-foreground">↗</span>
              </li>
              <li className="flex justify-between border-b border-foreground/20 pb-3">
                <span>Verifiable Compute Layer</span>
                <span className="text-muted-foreground">↗</span>
              </li>
              <li className="flex justify-between border-b border-foreground/20 pb-3">
                <span>Cryptographic Tooling</span>
                <span className="text-muted-foreground">↗</span>
              </li>
            </ul>
          </article>
          <article className="flex flex-col bg-background p-8 md:p-10">
            <p className="label mb-4 text-muted-foreground">Research</p>
            <h3 className="display mb-4 text-3xl md:text-4xl">Web5 & AI Governance</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Ongoing work on Web5-aligned infrastructure, agentic-AI accountability, and frameworks
              for embedding cryptographic verifiability into autonomous systems.
            </p>
            <ul className="space-y-3 border-t border-foreground pt-5 text-sm">
              <li className="flex justify-between border-b border-foreground/20 pb-3">
                <span>Decentralized Identifiers (DIDs)</span>
                <span className="text-muted-foreground">↗</span>
              </li>
              <li className="flex justify-between border-b border-foreground/20 pb-3">
                <span>Zero-Knowledge Architectures</span>
                <span className="text-muted-foreground">↗</span>
              </li>
              <li className="flex justify-between border-b border-foreground/20 pb-3">
                <span>AI Oversight Frameworks</span>
                <span className="text-muted-foreground">↗</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-foreground bg-foreground px-5 py-20 text-background md:px-8 md:py-40">
        <div className="mx-auto max-w-5xl">
          <p className="label mb-6 text-background/60">05 / Vision</p>
          <h2 className="display text-3xl sm:text-4xl md:text-7xl">
            A future where digital sovereignty is the default — not a feature.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <p className="text-base leading-relaxed text-background/85">
              Justin believes the next era of the internet will be defined by the ability of
              individuals and institutions to own their identity, prove what they know, and run
              computation they can trust — without depending on opaque intermediaries. Cryptography,
              decentralized systems, and verifiable computation are the tools to make that possible.
            </p>
            <p className="text-base leading-relaxed text-background/85">
              His long-term work focuses on building the protocols, primitives, and governance
              frameworks for that future: infrastructure that protects privacy by design,
              distributes power across networks rather than platforms, and keeps human agency at the
              center as AI systems become more autonomous.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Links */}
      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mb-12 flex items-end justify-between border-b border-foreground pb-6">
          <h2 className="display text-3xl sm:text-4xl md:text-6xl">Professional Links</h2>
          <span className="text-xs text-muted-foreground">06 / Connect</span>
        </div>
        <ul className="grid grid-cols-1 gap-px bg-foreground md:grid-cols-2">
          {links.map((l) => (
            <li key={l.label} className="bg-background">
              <a
                href={l.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="flex items-center justify-between gap-4 p-6 transition-colors hover:bg-foreground hover:text-background sm:p-8 md:p-10"
              >
                <span className="display text-2xl sm:text-3xl md:text-4xl">{l.label}</span>
                <span className="text-xs text-muted-foreground group-hover:text-background/70 sm:text-sm">
                  {l.handle} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground bg-background px-5 py-10 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="display text-3xl">Justin Malonson</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Software Engineer & Blockchain Architect — based in the United States.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <a
              href="https://www.linkedin.com/in/justin-malonson"
              target="_blank"
              rel="me noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/justinmalonson"
              target="_blank"
              rel="me noopener noreferrer"
              className="hover:underline"
            >
              X
            </a>
            <a
              href="https://github.com/justinmalonson"
              target="_blank"
              rel="me noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://t.me/justinmalonson"
              target="_blank"
              rel="me noopener noreferrer"
              className="hover:underline"
            >
              Telegram
            </a>
          </div>
        </div>
        <div className="mt-10 flex justify-between border-t border-foreground pt-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Justin Malonson</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}
