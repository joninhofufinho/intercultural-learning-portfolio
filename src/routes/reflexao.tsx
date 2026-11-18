import { createFileRoute } from "@tanstack/react-router";
import { reflexao as r } from "@/content/portfolio";
import { SectionBody, SectionHero, SectionPager, sectionHead } from "@/components/site/SectionLayout";

export const Route = createFileRoute("/reflexao")({
  head: () =>
    sectionHead("Reflexão", "Reflexão final sobre o percurso na unidade curricular de Educação Intercultural e Mediação."),
  component: Reflexao,
});

function Reflexao() {
  return (
    <>
      <SectionHero
        path="/reflexao"
        lead="Um olhar para trás sobre o semestre — o que mudou na forma como penso a educação, a diversidade e a mediação."
        imageAlt="Jovem a escrever num diário junto a uma janela soalheira"
      />
      <SectionBody>
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="font-serif text-3xl italic leading-snug text-foreground sm:text-4xl">
            “{r.citacao.texto}”
          </blockquote>
          <figcaption className="kicker mt-5 text-primary">— {r.citacao.autor}</figcaption>
        </figure>

        <div className="mx-auto mt-16 max-w-2xl prose-editorial">
          {r.paragrafos.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-medium">O que levo comigo</h2>
            <ul className="mt-5 space-y-3">
              {r.aprendizagens.map((a) => (
                <li key={a} className="flex gap-3 border-b border-border pb-3">
                  <span className="text-sky">●</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm bg-ink p-8 text-ink-foreground">
            <p className="kicker opacity-75">Daqui para a frente</p>
            <p className="mt-3 font-serif text-xl italic leading-relaxed">{r.futuro}</p>
          </div>
        </div>
      </SectionBody>
      <SectionPager path="/reflexao" />
    </>
  );
}
