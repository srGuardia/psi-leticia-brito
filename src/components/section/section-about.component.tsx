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

        <div className="ml-4 flex h-full w-full flex-col justify-between">
          <div className="mt-10 block space-y-2 md:m-0 md:flex md:flex-col">
            <h3 className="font-medium text-2xl">
              Olá! Meu nome é&nbsp;
              <Highlighter color="#C2D5DF" isView multiline>
                Leticia de Brito Martins
              </Highlighter>
            </h3>
            <span className="max-w-fit rounded-full bg-brand p-2 text-xs">
              CRP 12/30305
            </span>

            <div className="mt-20 space-y-3">
              <h4 className="font-light text-xl">📖&nbsp;Minha Abordagem</h4>

              <p className="font-extralight text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quibusdam, possimus incidunt provident hic
                cupiditate architecto dolor voluptatibus assumenda minima
                dolorum nemo, laudantium inventore illum distinctio soluta
                tempore quaerat blanditiis.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-lg bg-[#FAF7FB]/60 p-8 text-black">
            <span>
              🩷&nbsp;Vamos juntos explorar os caminhos que levarão ao seu
              bem-estar emocional e mental.
            </span>

            <a
              href="tel:+5518997828340"
              className="w-full max-w-80 rounded-md border px-6 py-4 text-center font-light text-white transition-colors duration-400 hover:bg-gray-300 hover:text-black"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </div>
    </SectionContent>
  );
}
