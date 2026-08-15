import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { MAILTO } from "@/lib/contact-mailto";
import {
  EXPERTISE_URL,
  HOME_URL,
  PERSON_ID,
  WEBSITE_ID,
  breadcrumb,
  jsonLd,
  socialMeta,
  website,
} from "@/lib/seo";

const expertiseTitle = "Software Engineering Expertise | Justin Malonson";
const expertiseDescription =
  "Explore Justin Malonson's software engineering work across distributed systems, cryptography, cybersecurity, blockchain architecture, artificial intelligence, and verifiable computation.";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: socialMeta({
      title: expertiseTitle,
      description: expertiseDescription,
      url: EXPERTISE_URL,
    }),
    links: [{ rel: "canonical", href: EXPERTISE_URL }],
    scripts: [
      jsonLd([
        website(),
        {
          "@type": "WebPage",
          "@id": `${EXPERTISE_URL}#webpage`,
          url: EXPERTISE_URL,
          name: expertiseTitle,
          description: expertiseDescription,
          isPartOf: { "@id": WEBSITE_ID },
          about: { "@id": PERSON_ID },
          author: { "@id": PERSON_ID },
          breadcrumb: { "@id": `${EXPERTISE_URL}#breadcrumb` },
        },
        breadcrumb(`${EXPERTISE_URL}#breadcrumb`, [
          { name: "Home", url: HOME_URL },
          { name: "Expertise", url: EXPERTISE_URL },
        ]),
      ]),
    ],
  }),
  component: ExpertisePage,
});

const areas = [
  {
    title: "Cryptography",
    body: "Applied and theoretical cryptography spanning symmetric and asymmetric primitives, hash-based commitments, signature schemes, and protocol design. Focused on building practical systems that translate cryptographic guarantees into deployable infrastructure for identity, authentication, and verifiable data.",
  },
  {
    title: "Blockchain Architecture",
    body: "Designing consensus mechanisms, execution layers, and interoperability frameworks for distributed ledgers. Experience covers Layer 1 and Layer 2 architectures, modular blockchain design, rollups, state-transition models, and the economic and security trade-offs that shape protocol viability.",
  },
  {
    title: "Web5 Systems",
    body: "Building infrastructure aligned with the Web5 thesis — combining decentralized identity, personal datastores, and verifiable credentials so users own their identity and data across applications. Work spans DID methods, DWN-style data nodes, and credential exchange flows.",
  },
  {
    title: "Decentralized Identity (DID)",
    body: "Research and engineering on self-sovereign identity, decentralized identifiers, verifiable credentials, and selective disclosure. Focus on production-grade identity layers that interoperate with existing identity ecosystems while removing reliance on central authorities.",
  },
  {
    title: "Privacy-Preserving Systems",
    body: "Designing systems that minimize, shield, and selectively reveal user data using techniques such as zero-knowledge proofs, secure multi-party computation, blind signatures, and confidential compute. Emphasis on usable privacy that does not compromise auditability.",
  },
  {
    title: "Zero-Knowledge Proofs",
    body: "Practical applications of zk-SNARKs, zk-STARKs, and related proof systems for identity, authentication, compliance, and verifiable computation. Focus on production integrations — proof generation pipelines, circuit design considerations, and verifier deployment.",
  },
  {
    title: "Distributed Systems",
    body: "Architecting resilient, fault-tolerant systems across nodes, regions, and trust boundaries. Expertise covers consensus, replication, sharding, eventual consistency, service mesh design, and operating distributed software in adversarial network conditions.",
  },
  {
    title: "AI Governance",
    body: "Frameworks for accountability, transparency, and human oversight in AI and agentic systems. Research focuses on embedding cryptographic verifiability into model behavior, policy enforcement, and audit trails so autonomous systems remain inspectable and constrained.",
  },
  {
    title: "Verifiable Computation",
    body: "Systems where computation can be cryptographically proven correct without re-execution or trust in the operator. Applications include verifiable inference, off-chain compute attestations, and proof-carrying data for high-assurance pipelines.",
  },
  {
    title: "Technology Strategy & Innovation",
    body: "Advising founders, research labs, and engineering teams on architectural direction, protocol design choices, and long-horizon technology roadmaps. Focused on translating frontier research into durable infrastructure that can withstand multiple platform cycles.",
  },
];

function ExpertisePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="px-5 pt-[clamp(3rem,7vw,7rem)] md:px-8">
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
                Expertise
              </li>
            </ol>
          </nav>
          <h1 className="display text-6xl leading-[0.9] sm:text-7xl md:text-[10rem]">Expertise</h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Research, engineering, and innovation across cryptography, digital identity, privacy,
            and decentralized systems.
          </p>
        </section>

        {/* Areas grid */}
        <section className="px-5 py-[clamp(4rem,8vw,8rem)] md:px-8">
          <div className="mb-12 flex items-end justify-between border-b border-foreground pb-6">
            <h2 className="display text-3xl sm:text-4xl md:text-6xl">Areas of Practice</h2>
            <span className="text-xs text-muted-foreground">02 / Practice</span>
          </div>
          <div className="grid grid-cols-1 gap-px bg-foreground md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <article key={a.title} className="flex flex-col bg-background p-8 md:p-10">
                <span className="label mb-6 text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mb-4 text-2xl md:text-3xl">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-foreground bg-foreground px-5 py-[clamp(4rem,8vw,8rem)] text-background md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="label mb-6 text-background/60">Collaborate</p>
            <h2 className="display text-3xl sm:text-4xl md:text-7xl">
              Have a problem that needs deep technical thinking?
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-background/70">
              Engagements span research, architecture review, protocol design, and advisory work for
              founders and engineering teams building cryptographic and decentralized
              infrastructure.
            </p>
            <a
              href={MAILTO.expertise}
              className="mt-12 inline-flex items-center gap-3 border border-background px-8 py-4 text-sm transition-colors hover:bg-background hover:text-foreground"
            >
              Get in touch →
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-foreground bg-background px-5 py-10 md:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="display text-2xl sm:text-3xl">Justin Malonson</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Software Engineer — based in the United States.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link to="/about/" className="hover:underline">
            About Justin Malonson
          </Link>
          <Link to="/expertise/" className="hover:underline">
            Expertise
          </Link>
          <Link to="/contact/" className="hover:underline">
            Contact
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
  );
}
