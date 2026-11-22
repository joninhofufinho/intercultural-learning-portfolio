import { createFileRoute, Link } from "@tanstack/react-router";
import { boasVindas, fotosPartida, info, quemSouEu, referenciasUC, sections } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Folha de Rosto · Portefólio de Joni Freitas" },
      {
        name: "description",
        content: `${info.titulo} — ${info.estudante}, ${info.curso}, ${info.instituicao}, ${info.anoLetivo}.`,
      },
      { property: "og:title", content: "Folha de Rosto · Portefólio de Joni Freitas" },
      {
        property: "og:description",
        content: "Portefólio de Educação Intercultural e Mediação: leituras, trabalho a pares, pesquisa, trabalho de grupo e reflexão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FolhaDeRosto,
});

function FolhaDeRosto() {
  const destaque = sections[0]!;
  const resto = sections.slice(1);
  return (
    <>
      {/* Capa */}
      <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="animate-rise lg:col-span-6">
            <p className="kicker text-primary">Portefólio · {info.estudante}</p>
            <h1 className="mt-5 text-5xl font-medium leading-[1] text-foreground sm:text-6xl">
              Entre leituras, reflexões,
              <br />
              <em className="font-normal text-primary">ideias e diálogos</em>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-xl italic leading-relaxed text-muted-foreground sm:text-2xl">
              {info.subtitulo} em {info.unidadeCurricular}
            </p>
            <p className="mt-8 font-serif text-2xl text-primary">{boasVindas.titulo}</p>
          </div>
          <figure className="animate-rise lg:col-span-6 [animation-delay:150ms]">
            <img
              src={fotosPartida.src}
              alt="Colagem de fotografias pessoais: tatuagem, espetáculos, manifestações, pintura, animais e viagens"
              width={1080}
              height={1080}
              className="aspect-square w-full rounded-sm object-cover shadow-paper"
            />
            <figcaption className="mt-3 text-sm italic text-muted-foreground">{fotosPartida.legenda}</figcaption>
          </figure>
        </div>
      </section>

      {/* Apresentação */}
      <section className="mx-auto mt-14 max-w-3xl px-5 sm:px-8" aria-labelledby="apresentacao">
        <p className="kicker text-primary" id="apresentacao">
          {"\n"}
        </p>
        <div className="mt-4 space-y-4 font-serif text-lg leading-relaxed text-foreground/90 sm:text-xl">
          {boasVindas.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* Quem sou eu */}
      <section className="mt-24 bg-secondary py-20" aria-labelledby="quem">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <figure className="lg:col-span-5">
            <img
              src={quemSouEu.foto}
              alt={`Fotografia de ${quemSouEu.nome}`}
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-sm object-cover object-[55%_center] shadow-paper"
            />
          </figure>
          <div className="lg:col-span-7">
            <p className="kicker text-secondary-foreground">Quem sou eu?</p>
            <h2 id="quem" className="mt-3 text-5xl font-medium text-secondary-foreground sm:text-6xl">
              {quemSouEu.nome}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-secondary-foreground">
              {quemSouEu.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <figure className="mx-auto mt-16 max-w-3xl border-t-2 border-secondary-foreground px-5 pt-10 text-center sm:px-8">
          <blockquote className="font-serif text-3xl italic leading-snug text-secondary-foreground sm:text-4xl">
            “{quemSouEu.citacao.texto}”
          </blockquote>
          <figcaption className="kicker mt-4 text-secondary-foreground/70">
            — {quemSouEu.citacao.autor}
          </figcaption>
        </figure>
      </section>

      {/* Índice */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8" aria-labelledby="indice">
        <div className="flex items-end justify-between border-b-2 border-foreground pb-3">
          <h2 id="indice" className="text-3xl font-medium sm:text-4xl">Índice</h2>
          <span className="kicker text-muted-foreground">5 secções</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Link to={destaque.to} className="group lg:col-span-7">
            <p className="kicker text-primary">{destaque.numero}</p>
            <h3 className="mt-2 text-4xl font-medium transition-colors group-hover:text-primary">
              {destaque.titulo}
            </h3>
            <p className="mt-3 max-w-lg text-muted-foreground">{destaque.resumo}</p>
          </Link>

          <ul className="divide-y divide-border lg:col-span-5">
            {resto.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="group block py-5 first:pt-0">
                  <div>
                    <p className="kicker text-primary">{s.numero}</p>
                    <h3 className="mt-1 text-2xl font-medium transition-colors group-hover:text-primary">
                      {s.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.resumo}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Referências da UC */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8" aria-labelledby="refs">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker text-primary">Bibliografia</p>
            <h2 id="refs" className="mt-3 text-4xl font-medium">Referências da unidade curricular</h2>
            <p className="mt-4 text-muted-foreground">
              Obras de referência indicadas no programa de {info.unidadeCurricular}.
            </p>
          </div>
          <ol className="space-y-4 lg:col-span-8">
            {referenciasUC.map((r, i) => (
              <li key={r} className="grid grid-cols-[2.5rem_1fr] border-b border-border pb-4">
                <span className="font-serif text-lg italic text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
