import { Link } from "@tanstack/react-router";

type Item =
  | { num: string; label: string; kind: "route"; to: "/" | "/about" | "/expertise" | "/contact" }
  | { num: string; label: string; kind: "anchor"; href: string };

const items: Item[] = [
  { num: "01", label: "About", kind: "route", to: "/about" },
  { num: "02", label: "Expertise", kind: "route", to: "/expertise" },
  { num: "03", label: "Contact", kind: "route", to: "/contact" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 border-b border-foreground bg-background">
      {items.map((item, i) => {
        const cls = `group relative flex items-baseline justify-between gap-2 px-3 py-4 transition-colors hover:bg-foreground hover:text-background sm:px-5 sm:py-5 md:px-8 ${
          i < items.length - 1 ? "border-r border-foreground" : ""
        }`;
        const inner = (
          <>
            <span className="truncate text-base font-light tracking-tight sm:text-2xl md:text-[2.5rem]">
              {item.label}
            </span>
            <span className="hidden text-xs text-muted-foreground group-hover:text-background/70 sm:inline">
              {item.num}
            </span>
          </>
        );
        if (item.kind === "route") {
          return (
            <Link key={item.label} to={item.to} className={cls}>
              {inner}
            </Link>
          );
        }
        return (
          <a key={item.label} href={item.href} className={cls}>
            {inner}
          </a>
        );
      })}
    </nav>
  );
}
