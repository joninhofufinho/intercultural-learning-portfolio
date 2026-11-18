import { createFileRoute } from "@tanstack/react-router";
import { trabalhoPesquisa as t } from "@/content/portfolio";
import { SectionBody, SectionHero, SectionPager, sectionHead } from "@/components/site/SectionLayout";

export const Route = createFileRoute("/trabalho-pesquisa")({
  head: () =>
    sectionHead("Trabalho de Pesquisa", "Pesquisa individual sobre práticas de acolhimento de alunos migrantes no 1.º ciclo em Lisboa."),
  component: TrabalhoPesquisa,
});

function TrabalhoPesquisa() {
  return (
    <>
      <SectionHero
        path="/trabalho-pesquisa"
        lead="Uma investigação individual que partiu de uma pergunta concreta e procurou ouvir quem está todos os dias na sala de aula."
        imageAlt="Mesa de pesquisa com mapa antigo, lupa, fichas e artigos"
      />
      <SectionBody>
        <h2 className="max-w-4xl text-4xl font-medium leading-tight sm:text-5xl">{t.titulo}</h2>
        <p className="mt-3 kicker text-muted-foreground">{t.data}</p>

        <div className="mt-12 border-y-2 border-foreground py-8">
          <p className="kicker text-primary">Pergunta de partida</p>
          <p className="mt-3 max-w-4xl font-serif text-2xl italic leading-snug">{t.pergunta}</p>
        </div>

        <h3 className="mt-14 text-2xl font-medium">Metodologia</h3>
        <ol className="mt-6 grid gap-8 md:grid-cols-3">
          {t.metodologia.map((m, i) => (
            <li key={m.etapa}>
              <span className="kicker text-primary">Etapa {i + 1}</span>
              <h4 className="mt-2 text-xl font-medium">{m.etapa}</h4>
              <p className="mt-2 text-muted-foreground">{m.texto}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-medium">Principais resultados</h3>
            <ul className="mt-5 space-y-4">
              {t.resultados.map((r) => (
                <li key={r} className="flex gap-4 border-b border-border pb-4">
                  <span className="font-serif text-xl text-primary">✦</span>
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-sm bg-ink p-8 text-ink-foreground">
              <p className="kicker opacity-75">Conclusão</p>
              <p className="mt-3 font-serif text-lg leading-relaxed">{t.conclusao}</p>
            </div>
            <h4 className="kicker mt-8 text-muted-foreground">Referências</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {t.referencias.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBody>
      <SectionPager path="/trabalho-pesquisa" />
    </>
  );
}
