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
        'min-h-100 w-full overflow-hidden px-8 py-10 text-white',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
