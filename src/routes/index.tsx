import { createFileRoute, Link } from "@tanstack/react-router";
import { fotosPartida, images, info, referenciasUC, sections } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Folha de Rosto · Portefólio de Educação Intercultural" },
      {
        name: "description",
        content: `${info.titulo} — ${info.estudante}, ${info.curso}, ${info.instituicao}, ${info.anoLetivo}.`,
      },
      { property: "og:title", content: "Folha de Rosto · Portefólio de Educação Intercultural" },
      {
        property: "og:description",
        content: "Leituras das aulas, trabalho a pares, pesquisa, trabalho de grupo e reflexão final.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FolhaDeRosto,
});

const dados: [string, string][] = [
  ["Estudante", info.estudante],
  ["Número", info.numero],
  ["Curso", info.curso],
  ["Instituição", info.instituicao],
  ["Unidade curricular", info.unidadeCurricular],
  ["Docente", info.docente],
  ["Ano letivo", `${info.anoLetivo} · ${info.semestre}`],
];

function FolhaDeRosto() {
  const destaque = sections[0]!;
  const resto = sections.slice(1);
  return (
    <>
      {/* Capa */}
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="animate-rise lg:col-span-8">
            <p className="kicker text-primary">Folha de Rosto · {info.local}, {info.data}</p>
            <h1 className="mt-5 text-6xl font-medium leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
              Educação
              <br />
              <em className="font-normal text-primary">Intercultural</em>
            </h1>
            <p className="mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-muted-foreground sm:text-2xl">
              {info.subtitulo}
            </p>
          </div>
          <dl className="animate-rise self-end border-t-2 border-foreground lg:col-span-4 [animation-delay:150ms]">
            {dados.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[8.5rem_1fr] gap-3 border-b border-border py-3 text-sm">
                <dt className="kicker pt-0.5 text-muted-foreground">{k}</dt>
                <dd className="font-semibold text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="animate-rise mt-14 [animation-delay:250ms]">
          <img
            src={images.capa}
            alt="Mãos de várias pessoas, de diferentes tons de pele, unidas sobre um tecido com padrões de várias culturas"
            width={1600}
            height={1008}
            className="aspect-[16/9] w-full rounded-sm object-cover shadow-paper sm:aspect-[21/9]"
          />
          <figcaption className="mt-3 text-sm italic text-muted-foreground">
            “A diversidade não é um problema a resolver, mas uma riqueza a partilhar.”
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
            <div className="overflow-hidden rounded-sm">
              <img
                src={destaque.imagem}
                alt=""
                loading="lazy"
                width={1408}
                height={1008}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className="kicker mt-5 text-primary">{destaque.numero}</p>
            <h3 className="mt-2 text-4xl font-medium transition-colors group-hover:text-primary">
              {destaque.titulo}
            </h3>
            <p className="mt-3 max-w-lg text-muted-foreground">{destaque.resumo}</p>
          </Link>

          <ul className="divide-y divide-border lg:col-span-5">
            {resto.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="group grid grid-cols-[6rem_1fr] gap-5 py-5 first:pt-0">
                  <img
                    src={s.imagem}
                    alt=""
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
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

      {/* Fotografias de partida */}
      <section className="mt-24 bg-secondary py-20" aria-labelledby="fotos">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="kicker text-secondary-foreground">Ponto de partida</p>
          <h2 id="fotos" className="mt-3 text-4xl font-medium text-secondary-foreground sm:text-5xl">
            Fotografias de partida
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {fotosPartida.map((f, i) => (
              <figure key={i} className={i === 1 ? "md:translate-y-10" : ""}>
                <img
                  src={f.src}
                  alt={f.legenda}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="aspect-[4/5] w-full rounded-sm object-cover shadow-paper"
                />
                <figcaption className="mt-3 font-serif text-sm italic text-secondary-foreground">
                  {f.legenda}
                </figcaption>
              </figure>
            ))}
          </div>
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
