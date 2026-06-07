import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { MAILTO } from "@/lib/contact-mailto";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Justin Malonson — Software Engineer & Blockchain Architect" },
      {
        name: "description",
        content:
          "Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a Blockchain Architect working on distributed systems, cryptographic protocols, and AI-integrated architectures.",
      },
      {
        property: "og:title",
        content: "Justin Malonson — Software Engineer & Blockchain Architect",
      },
      {
        property: "og:description",
        content:
          "Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a Blockchain Architect working on distributed systems, cryptographic protocols, and AI-integrated architectures.",
      },
      { property: "og:url", content: "https://justinmalonson.com" },
      { property: "og:type", content: "website" },
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
    links: [{ rel: "canonical", href: "https://justinmalonson.com" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://justinmalonson.com/#person",
              name: "Justin Malonson",
              url: "https://justinmalonson.com",
              image:
                "https://raw.githubusercontent.com/blockchaincomputer/brand/refs/heads/main/justin_malonson.png",
              jobTitle:
                "Founder of Blockchain Computer, Software Engineer, and Blockchain Architect",
              description:
                "Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a Blockchain Architect working on distributed systems, cryptographic protocols, and AI-integrated architectures.",
              worksFor: { "@id": "https://blockchaincomputer.com/#organization" },
              founder: { "@id": "https://blockchaincomputer.com/#organization" },
              knowsAbout: [
                "Distributed Systems",
                "Cryptographic Protocols",
                "Zero-Knowledge Proofs",
                "AI Infrastructure",
                "Decentralized Computation",
                "Sovereign Networks",
                "Blockchain",
                "Computer Science",
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
            },
            {
              "@type": "Organization",
              "@id": "https://blockchaincomputer.com/#organization",
              name: "Blockchain Computer Inc.",
              url: "https://blockchaincomputer.com",
              founder: { "@id": "https://justinmalonson.com/#person" },
            },
            {
              "@type": "WebSite",
              "@id": "https://justinmalonson.com/#website",
              name: "Justin Malonson",
              url: "https://justinmalonson.com",
              description:
                "Justin Malonson is the Founder of Blockchain Computer, a Software Engineer, and a Blockchain Architect working on distributed systems, cryptographic protocols, and AI-integrated architectures.",
              publisher: { "@id": "https://justinmalonson.com/#person" },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const expertise = [
  {
    title: "Distributed Systems",
    body: "Designing resilient architectures that scale across nodes, regions, and trust boundaries.",
    items: [
      "Consensus Mechanisms",
      "Fault Tolerance",
      "Replication & Sharding",
      "Service Mesh Design",
    ],
  },
  {
    title: "Cryptographic Protocols",
    body: "Building secure, verifiable computation through modern cryptographic primitives.",
    items: [
      "Zero-Knowledge Proofs",
      "Privacy-Preserving Compute",
      "Protocol Design",
      "Threshold Cryptography",
    ],
  },
  {
    title: "AI-Integrated Architecture",
    body: "Embedding intelligence into infrastructure for autonomous, adaptive systems at scale.",
    items: ["Agentic Workflows", "Inference Infrastructure", "ML Pipelines", "Model Orchestration"],
  },
];

const testimonials = [
  {
    quote:
      "Justin brought architectural clarity to a problem we'd been circling for months. The system he designed is still the backbone we run on today.",
    name: "Daniel Wong",
    role: "CTO, Atlas Compute",
  },
  {
    quote:
      "Deep expertise in distributed systems and a rare ability to translate research into shipping infrastructure.",
    name: "Sarah Mitchell",
    role: "Founder, Northbridge Labs",
  },
  {
    quote:
      "Working with Justin shifted how we think about trust and verifiability in our protocol stack.",
    name: "James Patel",
    role: "Head of Engineering, NovaTech",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top numbered navigation */}
      <SiteNav />

      {/* Hero */}
      <section id="home" className="px-5 pt-6 md:px-8 md:pt-10">
        <div className="hero-grid flex flex-col items-center md:grid md:items-stretch">
          <h1 className="hero-name display text-center md:text-left">Justin</h1>
          <div className="hero-profile-image-wrapper shrink-0">
            <img
              src="https://raw.githubusercontent.com/blockchaincomputer/brand/refs/heads/main/justin_malonson.png"
              alt="Justin Malonson, software engineer and blockchain architect"
              width={960}
              height={1200}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-foreground pt-5 text-sm md:grid-cols-3">
          <p className="md:col-span-2 max-w-xl">
            I design foundational computing infrastructure — distributed systems, cryptographic
            protocols, and AI-integrated architectures for the next era of the web.
          </p>
          <p className="md:text-right">Software Engineer & Blockchain Architect</p>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="mt-24 overflow-hidden border-y border-foreground py-6">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap gap-12 text-2xl md:text-3xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "Sovereign Networks",
              "Distributed Systems",
              "Cryptographic Protocols",
              "AI Infrastructure",
              "Zero-Knowledge Proofs",
              "Decentralized Computation",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-12">
                {t}
                <span className="text-foreground/30">✦</span>
              </span>
            )),
          )}
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mb-12 flex items-end justify-between border-b border-foreground pb-6">
          <h2 className="display text-5xl md:text-7xl">My Expertise</h2>
          <span className="text-xs text-muted-foreground">02 / Expertise</span>
        </div>
        <div className="grid grid-cols-1 gap-px bg-foreground md:grid-cols-3">
          {expertise.map((e) => (
            <article key={e.title} className="flex flex-col bg-background p-8 md:p-10">
              <div className="mb-10 h-10 w-10 border border-foreground" />
              <h3 className="display mb-4 text-3xl md:text-4xl">{e.title}</h3>
              <p className="mb-8 text-sm text-muted-foreground">{e.body}</p>
              <ul className="mb-10 space-y-3 border-t border-foreground pt-5 text-sm">
                {e.items.map((it) => (
                  <li key={it} className="flex justify-between border-b border-foreground/20 pb-3">
                    <span>{it}</span>
                    <span className="text-muted-foreground">↗</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-foreground px-5 py-24 md:px-8 md:py-32">
        <div className="mb-12 flex items-end justify-between border-b border-foreground pb-6">
          <h2 className="display text-5xl md:text-7xl">Testimonials</h2>
          <span className="text-xs text-muted-foreground">03 / Trust</span>
        </div>
        <div className="grid grid-cols-1 gap-px bg-foreground md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between bg-background p-8 md:p-10"
            >
              <blockquote className="text-lg leading-snug md:text-xl">"{t.quote}"</blockquote>
              <figcaption className="mt-10 border-t border-foreground pt-5">
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="border-t border-foreground bg-foreground px-5 py-20 text-background md:px-8 md:py-40"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="label mb-6 text-background/60">Let's Build</p>
          <h2 className="display text-4xl sm:text-5xl md:text-8xl">
            Planning infrastructure that needs to last?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-background/70">
            I work with founders, research labs, and engineering teams to design systems built for
            sovereignty, security, and long-term scale.
          </p>
          <a
            href={MAILTO.homepage}
            className="mt-12 inline-flex items-center gap-3 border border-background px-8 py-4 text-sm transition-colors hover:bg-background hover:text-foreground"
          >
            Start a Conversation →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground bg-background px-5 py-10 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="display text-2xl sm:text-3xl">Justin Malonson</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Software Engineer & Blockchain Architect — based in the United States.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/expertise" className="hover:underline">
              Expertise
            </Link>
            <Link to="/contact" className="hover:underline">
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

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
