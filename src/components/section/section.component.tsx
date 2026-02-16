import type { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps extends PropsWithChildren, ComponentProps<'section'> {
  theme?: 'light' | 'dark';
}

export function SectionContent({
  children,
  className,
  theme = 'dark',
  ...props
}: SectionProps) {
  return (
    <section
      data-section-theme={theme}
      className={twMerge(
        'relative min-h-100 w-full overflow-hidden px-8 py-24',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
