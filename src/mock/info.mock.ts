import type { icons } from '@lucide/astro';

type IconName = keyof typeof icons;

type InfoMockType = {
  icon: IconName;
  title: string;
  description: string;
  color: string;
};

export const infoMock: InfoMockType[] = [
  {
    icon: 'Lightbulb',
    title: 'Clareza sobre si mesma',
    description:
      'A terapia amplia sua consciência emocional, ajuda a identificar padrões repetitivos e permite enxergar escolhas com mais lucidez. Você deixa de reagir no automático e começa a agir com intenção.',
    color: '--card-color-2',
  },
  {
    icon: 'Earth',
    title: 'Relações mais saudáveis',
    description:
      'O autoconhecimento fortalece sua autonomia e transforma a maneira como você se posiciona nos vínculos, no trabalho e nas decisões da sua vida.',
    color: '--card-color-1',
  },
  {
    icon: 'Brain',
    title: 'Ressignificação de padrões',
    description:
      'Muitas dores atuais têm raízes antigas, na terapia você compreende sua história, integra suas experiências e constrói novas formas de se relacionar consigo e com o mundo. Não é apagar o passado, é dar novo sentido a ele.',
    color: '--card-color-1',
  },
  {
    icon: 'Shell',
    title: 'Regulação emocional',
    description:
      'Você aprende a lidar melhor com ansiedade, inseguranças e sobrecarga emocional. Desenvolve recursos internos para sustentar decisões, enfrentar desafios e viver com mais equilíbrio.',
    color: '--card-color-2',
  },
];
