import { Highlighter } from '../ui';
import { SectionContent } from './section.component';

export function SectionPhrase() {
  return (
    <SectionContent
      theme="dark"
      className="min-h-40 p-4 text-center"
      id="phrase"
    >
      <Highlighter
        action="highlight"
        color="#FF9800"
        isView
        multiline
        iterations={5}
        animationDuration={2000}
      >
        <h2 className="mb-4 font-bold font-raleway text-4xl">
          "Aquilo que você não cura, você transfere."
        </h2>
      </Highlighter>
    </SectionContent>
  );
}
