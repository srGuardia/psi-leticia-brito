import avatar from '@/assets/images/avatar.jpg';
import { Highlighter, TypingAnimation } from './ui';

export function Hero() {
  return (
    <section
      className="h-full w-full overflow-hidden bg-[url(../assets/background.svg)] bg-cover bg-top bg-no-repeat pt-10 md:h-150 md:bg-center md:pt-40"
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
                words={['Leticia Brito', 'Psicóloga']}
                blinkCursor
                deleteSpeed={50}
                typeSpeed={90}
                loop
              />
            </h2>
            <p className="-mt-2 text-md text-white">
              <Highlighter action="underline" color="#FF9800">
                CRP: 12/30305
              </Highlighter>
            </p>

            <p className="mt-4 h-14 font-normal text-md text-white">
              <TypingAnimation typeSpeed={40} className="leading-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias voluptas consectetur quae assumenda quod nemo, nostrum
                hic autem praesentium laudantium totam ad aliquam impedit,
                reprehenderit harum animi quaerat libero dolore.
              </TypingAnimation>
            </p>
          </div>

          <a
            href="tel:+5518997828340"
            className="mt-22 w-full max-w-80 rounded-md border px-6 py-4 text-center font-light text-white transition-colors duration-400 hover:bg-gray-300 hover:text-black md:mt-16"
          >
            Agende sua consulta
          </a>
        </div>
      </div>
    </section>
  );
}
