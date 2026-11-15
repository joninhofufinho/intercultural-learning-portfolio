import { createFileRoute } from "@tanstack/react-router";
import { leituras } from "@/content/portfolio";
import { SectionBody, SectionHero, SectionPager, sectionHead } from "@/components/site/SectionLayout";

export const Route = createFileRoute("/leituras")({
  head: () =>
    sectionHead("Leituras das Aulas", "Sínteses e comentários críticos aos textos lidos em cada aula de Educação Intercultural."),
  component: Leituras,
});

function Leituras() {
  return (
    <>
      <SectionHero
        path="/leituras"
        lead="Para cada sessão, registo a referência do texto, as ideias-chave e um comentário pessoal sobre o que a leitura me trouxe."
        imageAlt="Livros abertos e notas de leitura sobre uma mesa de madeira"
      />
      <SectionBody>
        <ol className="space-y-0">
          {leituras.map((l) => (
            <li key={l.sessao} className="grid gap-6 border-b border-border py-10 first:pt-0 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="kicker text-primary">{l.sessao}</p>
                <p className="mt-1 font-serif text-lg italic text-muted-foreground">{l.data}</p>
              </div>
              <div className="md:col-span-9">
                <p className="text-sm font-semibold text-muted-foreground">{l.autor}</p>
                <h2 className="mt-1 text-3xl font-medium">{l.titulo}</h2>
                <div className="mt-5 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="kicker text-muted-foreground">Ideias-chave</h3>
                    <ul className="mt-3 space-y-2">
                      {l.ideias.map((i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <blockquote className="border-l-2 border-primary pl-5 font-serif text-lg italic leading-relaxed text-foreground">
                    {l.comentario}
                  </blockquote>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </SectionBody>
      <SectionPager path="/leituras" />
    </>
  );
}
