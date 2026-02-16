import { InfoMock } from '@/mock';
import { Icon } from '../icon';
import { Highlighter } from '../ui';
import { SectionContent } from './section.component';

export function SectionAbout() {
  return (
    <SectionContent className="mt-16 pb-30 text-white" id="about">
      <h3 className="text-center font-light text-3xl">
        Me
        <Highlighter action="underline" isView>
          conheça
        </Highlighter>
      </h3>

      <hr className="mx-auto my-6 w-40 rounded-md border-2 border-amber-600" />
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
          </div>
        ))}
      </div>
    </SectionContent>
  );
}
