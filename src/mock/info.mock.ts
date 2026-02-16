import type { IconName } from 'node_modules/lucide-react/dynamic';

type InfoMockType = {
  icon: IconName;
  title: string;
  description: string;
  color: string;
  group: string;
};

export const InfoMock: InfoMockType[] = [
  {
    icon: 'lightbulb',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    color: '--card-color-2',
    group: 'red',
  },
  {
    icon: 'earth',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    color: '--card-color-1',
    group: 'red',
  },
  {
    icon: 'brain',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    color: '--card-color-1',
    group: 'red',
  },
  {
    icon: 'shell',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    color: '--card-color-2',
    group: 'default',
  },
];
