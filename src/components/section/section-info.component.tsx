import { InfoMock } from '@/mock';
import { Icon } from '../icon';
import { BorderBeam, Highlighter } from '../ui';
import { SectionContent } from './section.component';

export function SectionInfo() {
  return (
    <SectionContent theme="light" className="bg-[#FAF7FB]" id="info">
      <h3 className="text-center font-light text-3xl">
        Como a terapia pode&nbsp;
        <Highlighter action="box" color="#FF9800" isView multiline>
          fortalecer sua autonomia
        </Highlighter>
      </h3>

      <hr className="mx-auto my-6 w-40 rounded-md border-2 border-brand" />
      <p className="mx-auto max-w-2xl text-center">
        A terapia é um processo de ampliação da consciência emocional. Ao
        compreender sua história, seus padrões e suas escolhas, você desenvolve
        mais clareza, autonomia e equilíbrio para lidar com desafios pessoais e
        profissionais. É um espaço seguro para se ver com mais profundidade e
        construir mudanças sustentáveis.
      </p>

      <div className="container mx-auto mt-16 grid gap-4 md:grid-cols-2">
        {InfoMock.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center gap-10 overflow-hidden rounded-lg px-4 py-8 transition-all duration-300 hover:scale-103"
            style={{
              backgroundColor: `var(${item.color}`,
            }}
          >
            <Icon name={item.icon} />
            <h4 className="text-center font-medium text-lg">{item.title}</h4>

            <p>{item.description}</p>
            <BorderBeam duration={8} size={100} reverse={index % 2 === 0} />
          </div>
        ))}
      </div>
    </SectionContent>
  );
}
