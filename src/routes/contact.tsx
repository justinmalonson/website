import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { MAILTO } from "@/lib/contact-mailto";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Justin Malonson | Collaboration, Advisory & Research" },
      {
        name: "description",
        content:
          "Contact Justin Malonson for collaboration, advisory opportunities, speaking engagements, research discussions, or technology partnerships in cryptography, decentralized systems, and AI.",
      },
      { property: "og:title", content: "Contact Justin Malonson" },
      {
        property: "og:description",
        content:
          "Get in touch with Justin Malonson — collaboration, advisory, speaking, research, and partnership inquiries.",
      },
      { property: "og:url", content: "https://justinmalonson.com/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@justinmalonson" },
      { name: "twitter:creator", content: "@justinmalonson" },
    ],
    links: [{ rel: "canonical", href: "https://justinmalonson.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: "https://justinmalonson.com/contact",
          name: "Contact Justin Malonson",
          about: { "@id": "https://justinmalonson.com/#person" },
          mainEntity: {
            "@type": "Person",
            "@id": "https://justinmalonson.com/#person",
            name: "Justin Malonson",
            sameAs: [
              "https://www.linkedin.com/in/justin-malonson",
              "https://x.com/justinmalonson",
              "https://github.com/justinmalonson",
              "https://t.me/justinmalonson",
            ],
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
              name: "Contact",
              item: "https://justinmalonson.com/contact",
            },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

const profiles = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justin-malonson",
    handle: "in/justin-malonson",
  },
  { label: "X", href: "https://x.com/justinmalonson", handle: "@justinmalonson" },
  { label: "GitHub", href: "https://github.com/justinmalonson", handle: "justinmalonson" },
  { label: "Telegram", href: "https://t.me/justinmalonson", handle: "@justinmalonson" },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Please share a bit more detail").max(2000),
  // Honeypot — must remain empty
  botcheck: z.string().max(0).optional().or(z.literal("")),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [loadedAt] = useState(() => Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      subject: String(fd.get("user_subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      botcheck: String(fd.get("botcheck") ?? ""),
    };

    // Anti-spam: minimum dwell time
    if (Date.now() - loadedAt < 2000) {
      setStatus("error");
      setError("Please take a moment to review your message before sending.");
      return;
    }

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }
    if (parsed.data.botcheck) {
      // Honeypot tripped — pretend success silently
      setStatus("sent");
      form.reset();
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setError("Contact form is temporarily unavailable. Please email hello@justinmalonson.com.");
      return;
    }

    setStatus("sending");
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: "JustinMalonson.com Contact Form",
        subject: "New Contact Form Submission - JustinMalonson.com",
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company ?? "",
        user_subject: parsed.data.subject,
        message: parsed.data.message,
        botcheck: "",
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json as { success?: boolean }).success !== false) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError((json as { message?: string }).message ?? "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Submission failed. Please check your connection and try again.");
    }
  }

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
              Contact
            </li>
          </ol>
        </nav>
        <h1 className="display text-4xl leading-[1.05] sm:text-6xl md:text-8xl md:leading-[0.95] lg:text-9xl">
          Contact Justin Malonson
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Interested in collaboration, advisory opportunities, speaking engagements, research
          discussions, or technology partnerships? Get in touch.
        </p>
      </section>

      {/* Form + profiles */}
      <section className="px-5 py-16 md:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-px bg-foreground lg:grid-cols-3">
          {/* Form */}
          <div className="bg-background p-5 sm:p-8 md:p-12 lg:col-span-2">
            <h2 className="display mb-8 text-2xl sm:text-3xl md:text-5xl">Send a message</h2>
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              {/* Honeypot field — hidden from users, visible to bots */}
              <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                <label>
                  Leave this field empty
                  <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  maxLength={100}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={255}
                />
                <Field
                  label="Company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  maxLength={150}
                />
                <Field label="Subject" name="user_subject" type="text" required maxLength={200} />
              </div>
              <div>
                <label className="label mb-2 block text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  maxLength={2000}
                  rows={6}
                  className="w-full border border-foreground bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground"
                />
              </div>

              {status === "error" && error && (
                <p className="border border-foreground p-4 text-sm">{error}</p>
              )}
              {status === "sent" && (
                <p className="border border-foreground bg-foreground p-4 text-sm text-background">
                  Thank you. Your message has been sent.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-3 border border-foreground bg-foreground px-8 py-4 text-sm text-background transition-colors hover:bg-background hover:text-foreground sm:w-auto sm:justify-start"
              >
                {status === "sending" ? "Sending…" : "Send message →"}
              </button>
            </form>
          </div>

          {/* Profiles */}
          <aside className="flex flex-col gap-8 bg-background p-5 sm:p-8 md:p-12">
            <div>
              <p className="label mb-4 text-muted-foreground">Direct</p>
              <a
                href={MAILTO.contact}
                className="display contact-email block underline-offset-4 hover:underline"
              >
                hello@justinmalonson.com
              </a>
            </div>
            <div>
              <p className="label mb-4 text-muted-foreground">Profiles</p>
              <ul className="space-y-3 border-t border-foreground pt-5 text-sm">
                {profiles.map((p) => (
                  <li
                    key={p.label}
                    className="flex justify-between border-b border-foreground/20 pb-3"
                  >
                    <a
                      href={p.href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      className="hover:underline"
                    >
                      {p.label}
                    </a>
                    <span className="text-muted-foreground">{p.handle} ↗</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
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
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
  maxLength,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="label mb-2 block text-muted-foreground">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="w-full border border-foreground bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground"
      />
    </div>
  );
}
