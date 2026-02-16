import { DynamicIcon, type IconName } from 'node_modules/lucide-react/dynamic';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconProps extends ComponentProps<typeof DynamicIcon> {
  name: IconName;
}

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <DynamicIcon
      name={name}
      className={twMerge('size-16 stroke-1', className)}
      {...props}
    />
  );
}
