import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { MAILTO } from "@/lib/contact-mailto";
import {
  HOME_DESCRIPTION,
  HOMEPAGE_ID,
  HOME_URL,
  PERSON_ID,
  PRIMARY_IMAGE_ID,
  imageObject,
  jsonLd,
  organization,
  person,
  socialMeta,
  website,
} from "@/lib/seo";

const homeTitle = "Justin Malonson | Software Engineer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: socialMeta({
      title: homeTitle,
      description: HOME_DESCRIPTION,
      url: HOME_URL,
      type: "profile",
    }),
    links: [{ rel: "canonical", href: HOME_URL }],
    scripts: [
      jsonLd([
        website(),
        {
          "@type": "WebPage",
          "@id": HOMEPAGE_ID,
          url: HOME_URL,
          name: homeTitle,
          description: HOME_DESCRIPTION,
          isPartOf: { "@id": "https://justinmalonson.com/#website" },
          about: { "@id": PERSON_ID },
          mainEntity: { "@id": PERSON_ID },
          primaryImageOfPage: { "@id": PRIMARY_IMAGE_ID },
        },
        person(),
        imageObject(),
        organization(),
      ]),
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

      <main>
        {/* Hero */}
        <section id="home" className="px-5 pt-6 md:px-8 md:pt-10">
          <div className="hero-grid flex flex-col items-center md:grid md:items-stretch">
            <div className="flex flex-col justify-center text-center md:text-left">
              <h1 className="hero-name display">
                <span>Justin</span>
                <span>Malonson</span>
              </h1>
              <h2 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
                Software Engineer
              </h2>
            </div>
            <div className="hero-profile-image-wrapper shrink-0">
              <img
                src="/justin-malonson.png"
                alt="Portrait of Justin Malonson, software engineer"
                width={800}
                height={800}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-foreground pt-5 text-sm md:grid-cols-3">
            <p className="md:col-span-2 max-w-xl">
              Justin Malonson is a software engineer specializing in distributed systems,
              cryptographic protocols, cybersecurity, blockchain architecture, artificial
              intelligence infrastructure, and sovereign computing. His broader work includes
              computer science, entrepreneurship, and authorship.
            </p>
            <p className="md:text-right">
              Software Engineer
              <br />
              <span className="text-muted-foreground">Blockchain Architect</span>
            </p>
          </div>
        </section>

        {/* Marquee strip */}
        <section className="mt-[clamp(4rem,7vw,6rem)] overflow-hidden border-y border-foreground py-6">
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
        <section id="expertise" className="px-5 py-[clamp(4rem,8vw,8rem)] md:px-8">
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
                    <li
                      key={it}
                      className="flex justify-between border-b border-foreground/20 pb-3"
                    >
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
        <section
          id="testimonials"
          className="border-t border-foreground px-5 py-[clamp(4rem,8vw,8rem)] md:px-8"
        >
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
          className="border-t border-foreground bg-foreground px-5 py-[clamp(5rem,10vw,10rem)] text-background md:px-8"
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
      </main>

      {/* Footer */}
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

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
