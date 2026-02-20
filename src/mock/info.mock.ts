import type { IconName } from 'node_modules/lucide-react/dynamic';

type InfoMockType = {
  icon: IconName;
  title: string;
  description: string;
  color: string;
};

export const InfoMock: InfoMockType[] = [
  {
    icon: 'lightbulb',
    title: 'Clareza sobre si mesma',
    description:
      'A terapia amplia sua consciência emocional, ajuda a identificar padrões repetitivos e permite enxergar escolhas com mais lucidez. Você deixa de reagir no automático e começa a agir com intenção.',
    color: '--card-color-2',
  },
  {
    icon: 'earth',
    title: 'Relações mais saudáveis',
    description:
      'O autoconhecimento fortalece sua autonomia e transforma a maneira como você se posiciona nos vínculos, no trabalho e nas decisões da sua vida.',
    color: '--card-color-1',
  },
  {
    icon: 'brain',
    title: 'Ressignificação de padrões',
    description:
      'Muitas dores atuais têm raízes antigas, na terapia você compreende sua história, integra suas experiências e constrói novas formas de se relacionar consigo e com o mundo. Não é apagar o passado, é dar novo sentido a ele.',
    color: '--card-color-1',
  },
  {
    icon: 'shell',
    title: 'Regulação emocional',
    description:
      'Você aprende a lidar melhor com ansiedade, inseguranças e sobrecarga emocional. Desenvolve recursos internos para sustentar decisões, enfrentar desafios e viver com mais equilíbrio.',
    color: '--card-color-2',
  },
];
