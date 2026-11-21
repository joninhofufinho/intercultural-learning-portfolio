import { createFileRoute } from "@tanstack/react-router";
import { leituras } from "@/content/portfolio";
import { SectionBody, SectionHero, SectionPager, sectionHead } from "@/components/site/SectionLayout";

export const Route = createFileRoute("/leituras")({
  head: () =>
    sectionHead(
      "Leituras das Aulas",
      "Leituras da unidade curricular de Educação Intercultural e Mediação, com ideias-chave e acesso aos textos.",
    ),
  component: Leituras,
});

function Leituras() {
  return (
    <>
      <SectionHero
        path="/leituras"
        lead="Os textos que acompanharam as aulas: a referência, as ideias que mais me interpelaram e, quando possível, o acesso ao texto."
        imageAlt="Livros abertos e notas de leitura sobre uma mesa de madeira"
      />
      <SectionBody>
        <ol>
          {leituras.map((l) => (
            <li key={l.titulo} className="grid gap-10 border-b border-border py-10 first:pt-0 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="kicker text-primary">
                  {l.sessao}
                  {l.data ? ` · ${l.data}` : ""}
                </p>
                {l.capa && (
                  <img
                    src={l.capa}
                    alt={`Capa do livro ${l.titulo}`}
                    loading="lazy"
                    width={600}
                    height={711}
                    className="mt-4 w-full max-w-xs rounded-sm shadow-paper"
                  />
                )}
              </div>
              <div className="md:col-span-8">
                {l.imagem && (
                  <figure className="mb-10">
                    <img
                      src={l.imagem}
                      alt={l.imagemLegenda ?? `Imagem relacionada com ${l.titulo}`}
                      loading="lazy"
                      width={1648}
                      height={799}
                      className="w-full rounded-sm border border-border shadow-paper"
                    />
                    {l.imagemLegenda && (
                      <figcaption className="kicker mt-3 text-muted-foreground">
                        {l.imagemLegenda}
                      </figcaption>
                    )}
                  </figure>
                )}
                <p className="text-sm font-semibold text-muted-foreground">{l.autor}</p>
                <h2 className="mt-1 text-4xl font-medium">{l.titulo}</h2>
                {l.editora && <p className="mt-2 font-serif italic text-muted-foreground">{l.editora}</p>}

                {l.ideias.length > 0 && (
                <>
                <h3 className="kicker mt-8 text-muted-foreground">{l.ideiasTitulo ?? "Ideias-chave"}</h3>
                <ul className="mt-4 space-y-3">
                  {l.ideias.map((i) => (
                    <li key={i} className="flex gap-3 text-lg leading-relaxed">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                </>
                )}

                {l.reflexao && (
                  <div className="mt-10 rounded-sm border border-border bg-card p-6 sm:p-9">
                    <h3 className="kicker text-primary">{l.reflexao.titulo}</h3>
                    <div className="prose-editorial mt-5 max-w-none">
                      {l.reflexao.blocos.map((b, i) =>
                        b.tipo === "citacao" ? (
                          <figure key={i} className="my-8 border-l-2 border-primary pl-5">
                            <blockquote className="font-serif text-xl italic leading-relaxed text-foreground">
                              «{b.texto}»
                            </blockquote>
                            <figcaption className="kicker mt-2 text-primary">— {b.autor}</figcaption>
                          </figure>
                        ) : (
                          <p key={i}>{b.texto}</p>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {l.comentario && (
                  <blockquote className="mt-8 border-l-2 border-primary pl-5 font-serif text-lg italic leading-relaxed text-foreground">
                    {l.comentario}
                  </blockquote>
                )}

                {l.pdf && (
                  <a
                    href={l.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
                  >
                    {l.pdfEtiqueta ?? "Síntese da Leitura"} →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </SectionBody>
      <SectionPager path="/leituras" />
    </>
  );
}
