import avatar from '@/assets/images/avatar_2.jpg';
import { Highlighter } from '../ui';
import { SectionContent } from './section.component';

export function SectionAbout() {
  return (
    <SectionContent theme="dark" className="text-white" id="about">
      <h3 className="text-center font-light text-3xl">
        Me&nbsp;
        <Highlighter action="box" multiline color="var(--brand)" isView>
          conheça
        </Highlighter>
      </h3>

      <div className="container mx-auto mt-16 grid gap-2 md:grid-cols-2">
        <div className="h-full max-h-lg w-full max-w-lg justify-self-center overflow-hidden rounded-lg shadow-card shadow-lg transition-transform duration-200 hover:-translate-y-5">
          <img
            src={avatar.src}
            alt="imagens sobre mim"
            loading="lazy"
            className="h-full w-full object-contain md:object-cover"
          />
        </div>

        <div className="flex h-full w-full flex-col justify-between md:ml-4">
          <div className="mt-10 block space-y-2 text-[#FAF7FB]/80 md:m-0 md:flex md:flex-col">
            <h3 className="font-medium text-2xl text-white">
              Olá! Meu nome é&nbsp;
              <Highlighter color="#C2D5DF" isView multiline>
                Leticia de Brito Martins
              </Highlighter>
            </h3>

            <span className="max-w-fit rounded-full bg-brand p-2 text-white text-xs">
              CRP 12/30305
            </span>

            <p className="mt-6 font-extralight text-sm md:text-base">
              Sou psicóloga clínica e organizacional e acredito que a terapia é
              um espaço de transformação — não pela mudança forçada, mas pela
              consciência.
            </p>

            <p className="font-extralight text-sm md:text-base">
              Sempre fui movida pelo interesse genuíno em compreender as emoções
              humanas, os conflitos internos e as escolhas que moldam nossa
              trajetória. Acredito que, quando ampliamos nossa consciência
              emocional, nos tornamos mais responsáveis pelas nossas decisões e
              mais livres para construir uma vida coerente com quem realmente
              somos. Ofereço um espaço seguro, ético e profundo, onde você possa
              se ver com mais clareza, ressignificar padrões e fortalecer sua
              autonomia. Meu trabalho é fundamentado na escuta ética, na
              responsabilidade técnica e no compromisso com o desenvolvimento
              pessoal e profissional dos meus pacientes e clientes.
            </p>

            <div className="mt-10 space-y-3">
              <h4 className="font-light text-white text-xl">
                📖&nbsp;Minha Abordagem
              </h4>

              <p className="font-extralight text-sm md:text-base">
                Estou disponível para atendimentos online e presenciais, onde
                aplico abordagens terapêuticas embasadas na psicanálise.
                Acredito que cada indivíduo é único e merece ser compreendido em
                profundidade para que possa viver uma vida mais significativa.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-lg bg-[#FAF7FB]/50 p-8 text-black">
            <span className="text-left text-[#FAF7FB]/80">
              Vamos juntos explorar os caminhos que levarão ao bem-estar
              emocional e mental.
            </span>

            <div className="flex flex-col gap-2 md:flex-row">
              <a
                href={`https://wa.me/${import.meta.env.PUBLIC_WHATSAPP_NUMBER}?text=Olá%2C%20eu%20gostaria%20de%20marcar%20uma%20sessão%20de%20psicoterapia%20individual.`}
                className="w-full max-w-80 rounded-md border px-6 py-4 text-center font-light text-white transition-colors duration-400 hover:border-emerald-300 hover:bg-emerald-400"
              >
                Agende sua consulta
              </a>

              <a
                href={`https://wa.me/${import.meta.env.PUBLIC_WHATSAPP_NUMBER}?text=Olá%2C%20eu%20gostaria%20de%20marcar%20uma%20sessão%20de%20psicoterapia%20individual.`}
                className="w-full max-w-80 rounded-md border px-6 py-4 text-center font-light text-white transition-colors duration-400 hover:border-[#FF9800]/60 hover:bg-[#FF9800]"
              >
                Agende sua consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContent>
  );
}
