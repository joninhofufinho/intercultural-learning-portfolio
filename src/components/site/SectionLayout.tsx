import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { sections, type SectionPath } from "@/content/portfolio";

export function SectionHero({
  path,
  lead,
  imageAlt,
}: {
  path: SectionPath;
  lead: string;
  imageAlt: string;
}) {
  const s = sections.find((x) => x.to === path)!;
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="animate-rise lg:col-span-12">
          <p className="kicker text-primary">Secção {s.numero}</p>
          <h1 className="mt-4 text-5xl font-medium leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            {s.titulo}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{lead}</p>
        </div>
      </div>
      <div className="rule-ornament mt-14" aria-hidden>
        <span className="font-serif text-lg">✦</span>
      </div>
    </section>
  );
}

export function SectionBody({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8">{children}</div>;
}

export function SectionPager({ path }: { path: SectionPath }) {
  const i = sections.findIndex((x) => x.to === path);
  const prev = i > 0 ? sections[i - 1] : null;
  const next = i < sections.length - 1 ? sections[i + 1] : null;
  return (
    <nav aria-label="Navegação entre secções" className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
      <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link to={prev.to} className="group">
            <span className="kicker text-muted-foreground">← Anterior</span>
            <span className="mt-1 block font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
              {prev.titulo}
            </span>
          </Link>
        ) : (
          <Link to="/" className="group">
            <span className="kicker text-muted-foreground">← Anterior</span>
            <span className="mt-1 block font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
              Folha de Rosto
            </span>
          </Link>
        )}
        {next && (
          <Link to={next.to} className="group sm:text-right">
            <span className="kicker text-muted-foreground">Seguinte →</span>
            <span className="mt-1 block font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
              {next.titulo}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}

export function sectionHead(title: string, description: string) {
  const full = `${title} · Portefólio de Joni Freitas`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
