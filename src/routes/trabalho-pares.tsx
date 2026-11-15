import { createFileRoute } from "@tanstack/react-router";
import { trabalhoPares as t } from "@/content/portfolio";
import { SectionBody, SectionHero, SectionPager, sectionHead } from "@/components/site/SectionLayout";

export const Route = createFileRoute("/trabalho-pares")({
  head: () =>
    sectionHead("Trabalho a Pares", "Análise a pares de um caso de acolhimento de uma aluna recém-chegada, com propostas de estratégias interculturais."),
  component: TrabalhoPares,
});

function TrabalhoPares() {
  return (
    <>
      <SectionHero
        path="/trabalho-pares"
        lead="Um estudo de caso analisado a dois, onde cruzámos as leituras da unidade curricular com uma situação real de sala de aula."
        imageAlt="Dois estudantes sentados lado a lado a partilhar um caderno"
      />
      <SectionBody>
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-sm bg-card p-6 shadow-paper">
              <p className="kicker text-muted-foreground">Ficha do trabalho</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="kicker text-primary">Elementos</dt>
                  <dd className="mt-1 font-semibold">{t.elementos.join(" & ")}</dd>
                </div>
                <div>
                  <dt className="kicker text-primary">Data</dt>
                  <dd className="mt-1 font-semibold">{t.data}</dd>
                </div>
                <div>
                  <dt className="kicker text-primary">Objetivo</dt>
                  <dd className="mt-1 leading-relaxed">{t.objetivo}</dd>
                </div>
              </dl>
            </div>
          </aside>
          <article className="lg:col-span-8">
            <h2 className="text-4xl font-medium">{t.titulo}</h2>
            <div className="prose-editorial mt-6">
              {t.desenvolvimento.map((p, i) => (
                <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
              ))}
            </div>

            <h3 className="mt-12 text-2xl font-medium">Estratégias propostas</h3>
            <ol className="mt-5 grid gap-4 sm:grid-cols-3">
              {t.estrategias.map((e, i) => (
                <li key={e} className="rounded-sm border border-border p-5">
                  <span className="font-serif text-3xl italic text-primary">{i + 1}</span>
                  <p className="mt-2 text-sm leading-relaxed">{e}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 rounded-sm bg-secondary p-8">
              <p className="kicker text-secondary-foreground">O que aprendemos a dois</p>
              <p className="mt-3 font-serif text-xl italic leading-relaxed text-secondary-foreground">
                {t.aprendizagens}
              </p>
            </div>
          </article>
        </div>
      </SectionBody>
      <SectionPager path="/trabalho-pares" />
    </>
  );
}
