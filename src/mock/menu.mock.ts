import type { IconName } from 'node_modules/lucide-react/dynamic';

type MenuMockType = {
  href: string;
  label: string;
  icon: IconName;
};

export const menuMock: MenuMockType[] = [
  {
    href: '#hero',
    label: 'Ínicio',
    icon: 'house',
  },
  {
    href: '#info',
    label: 'Informações',
    icon: 'book-open-text',
  },
  {
    href: '#services',
    label: 'Serviços',
    icon: 'briefcase',
  },
  {
    href: '#about',
    label: 'Sobre mim',
    icon: 'user',
  },
];
