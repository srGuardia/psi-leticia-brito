import { InfoMock } from '@/mock';
import { Icon } from '../icon';
import { BorderBeam, Highlighter } from '../ui';
import { SectionContent } from './section.component';

export function SectionInfo() {
  return (
    <SectionContent theme="light" className="bg-[#FAF7FB]" id="info">
      <h3 className="text-center font-light text-3xl">
        Como a terapia&nbsp;
        <Highlighter action="underline" color="#FF9800" isView multiline>
          pode transformar
        </Highlighter>
        &nbsp;seu dia a dia
      </h3>

      <hr className="mx-auto my-6 w-40 rounded-md border-2 border-brand" />
      <p className="mx-auto max-w-2xl text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        error rem a! Quibusdam illum eos porro expedita officia quas sunt harum.
        Iste assumenda enim maxime velit adipisci excepturi, blanditiis debitis.
      </p>

      <div className="container mx-auto mt-16 grid gap-4 md:grid-cols-2">
        {InfoMock.map((_item, _index) => (
          <div
            key={_index}
            className="relative flex flex-col items-center gap-10 overflow-hidden rounded-lg px-4 py-8 transition-all duration-300 hover:scale-103"
            style={{
              backgroundColor: `var(${_item.color}`,
            }}
          >
            <Icon name={_item.icon} />
            <h4 className="text-center font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, quibusdam, quae, quia quos quidem quia quia quia quia quia
              quia quia quia quia quia.
            </p>
            <BorderBeam duration={8} size={100} reverse={_index % 2 === 0} />
          </div>
        ))}
      </div>
    </SectionContent>
  );
}
