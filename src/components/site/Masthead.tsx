import { Link } from "@tanstack/react-router";
import { info, sections } from "@/content/portfolio";

const links = [{ to: "/" as const, titulo: "Folha de Rosto", numero: "00" }, ...sections];

export function Masthead() {
  return (
    <header className="border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-baseline justify-between gap-4 py-4">
          <Link to="/" className="group">
            <span className="kicker text-primary">Portefólio</span>
            <span className="block font-serif text-xl font-semibold text-foreground sm:text-2xl">
              {info.unidadeCurricular}
            </span>
          </Link>
          <span className="hidden text-sm text-muted-foreground md:block">
            {info.estudante} · {info.anoLetivo}
          </span>
        </div>
        <nav aria-label="Secções" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <ul className="flex min-w-max gap-6 border-t border-border py-3 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: true }}
                  className="group inline-flex items-baseline gap-1.5 text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
                >
                  <span className="font-serif text-xs italic opacity-70">{l.numero}</span>
                  <span className="font-semibold">{l.titulo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
