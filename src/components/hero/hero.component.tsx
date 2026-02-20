import avatar from '@/assets/images/avatar.jpg';
import { Highlighter } from '../ui/highlighter';
import { TypingAnimation } from '../ui/typing-animation';

export function Hero() {
  return (
    <section
      data-section-theme="dark"
      className="h-180 w-full overflow-hidden bg-[url(../assets/background.svg)] bg-cover bg-top bg-no-repeat pt-10 md:h-150 md:bg-center md:pt-40"
      id="hero"
    >
      <div className="container mx-auto flex h-full flex-col gap-4 md:flex-row">
        <div className="h-fit self-center md:h-full md:self-baseline">
          <img
            src={avatar.src}
            alt="foto de perfil"
            loading="lazy"
            className="h-80 w-80 rounded-full object-cover"
          />
        </div>

        <div className="flex flex-2 flex-col items-center text-center md:items-start md:text-start">
          <div className="w-full">
            <h2 className="font-bold text-4xl text-white">
              <TypingAnimation
                words={['Leticia Brito', 'Psicóloga Clínica e Organizacional']}
                blinkCursor
                deleteSpeed={50}
                typeSpeed={90}
                loop
              />
            </h2>
            <p className="-mt-2 text-md text-white">
              <Highlighter action="box" color="#FF9800">
                CRP: 12/30305
              </Highlighter>
            </p>

            <p className="mt-4 h-14 text-center font-normal text-md text-white md:max-w-2xl md:text-left">
              <Highlighter action="highlight" color="#FF9800" multiline>
                Psicanálise | Autoconhecimento | Saúde Mental
              </Highlighter>
              <br />
              Atendimento para adolescentes e adultos de forma presencial e
              online
              <br />E consultoria para&nbsp;
              <Highlighter action="underline" color="var(--brand)">
                empresas conscientes.
              </Highlighter>
            </p>
          </div>

          <a
            href={`https://wa.me/${import.meta.env.PUBLIC_WHATSAPP_NUMBER}?text=Olá%2C%20eu%20gostaria%20de%20marcar%20uma%20sessão%20de%20psicoterapia%20individual.`}
            className="mt-22 w-full max-w-80 rounded-md border px-6 py-4 text-center font-light text-white transition-colors duration-400 hover:bg-gray-300 hover:text-black md:mt-16"
          >
            Agende sua consulta
          </a>
        </div>
      </div>
    </section>
  );
}
