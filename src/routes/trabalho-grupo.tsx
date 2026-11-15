import { createFileRoute } from "@tanstack/react-router";
import { trabalhoGrupo as t } from "@/content/portfolio";
import { SectionBody, SectionHero, SectionPager, sectionHead } from "@/components/site/SectionLayout";

export const Route = createFileRoute("/trabalho-grupo")({
  head: () =>
    sectionHead("Trabalho de Grupo", "“Mapa das nossas histórias”: proposta de projeto intercultural para uma turma do 3.º ano."),
  component: TrabalhoGrupo,
});

function TrabalhoGrupo() {
  return (
    <>
      <SectionHero
        path="/trabalho-grupo"
        lead="Um projeto construído em conjunto, pensado para pôr as histórias de cada aluno no centro da turma."
        imageAlt="Grupo de estudantes sentados em círculo a desenhar um mapa do mundo"
      />
      <SectionBody>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="kicker text-primary">{t.subtitulo}</p>
            <h2 className="mt-3 text-5xl font-medium">{t.titulo}</h2>
            <div className="prose-editorial mt-6">
              {t.descricao.map((p, i) => (
                <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="space-y-6 lg:col-span-4">
            <div className="border-t-2 border-foreground pt-4">
              <p className="kicker text-muted-foreground">Elementos do grupo</p>
              <ul className="mt-3 space-y-1 font-semibold">
                {t.elementos.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">{t.data}</p>
            </div>
            <div className="rounded-sm bg-accent p-6 text-accent-foreground">
              <p className="kicker">O meu papel</p>
              <p className="mt-2 leading-relaxed">{t.papel}</p>
            </div>
          </aside>
        </div>

        <h3 className="mt-16 text-2xl font-medium">Fases do projeto</h3>
        <ol className="mt-6 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.fases.map((f) => (
            <li key={f.semana} className="bg-card p-6">
              <span className="kicker text-primary">{f.semana}</span>
              <h4 className="mt-3 text-2xl font-medium">{f.titulo}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.texto}</p>
            </li>
          ))}
        </ol>
      </SectionBody>
      <SectionPager path="/trabalho-grupo" />
    </>
  );
}
