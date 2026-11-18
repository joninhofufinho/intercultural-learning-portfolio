import { info } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="kicker opacity-70">{info.instituicao}</p>
          <p className="mt-2 font-serif text-2xl">{info.titulo}</p>
        </div>
        <div className="text-sm opacity-80 sm:text-right">
          <p>{info.estudante}</p>
          <p>{info.curso} · {info.especializacao}</p>
          <p>{info.unidadeCurricular} · {info.docente}</p>
          <p>{info.local}, {info.data}</p>
        </div>
      </div>
    </footer>
  );
}
