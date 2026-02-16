import type { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps extends PropsWithChildren, ComponentProps<'section'> {}

export function SectionContent({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={twMerge(
        'relative min-h-100 w-full overflow-hidden px-8 py-10',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
