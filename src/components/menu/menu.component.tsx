import { useEffect, useState } from 'react';
import logo from '@/assets/images/logo.png';
import { MenuMock } from '@/mock';
import { Icon } from '../icon';

export function Menu() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-section-theme]');

    const getRootMargin = () => {
      const isMobile = window.innerWidth < 768;
      // Desktop: menu is at top. Detection strip at 20%-30% from top.
      // Mobile: menu is at bottom (dock). Detection strip at bottom 20% (80%-100%).
      return isMobile ? '-80% 0px 0px 0px' : '-20% 0px -70% 0px';
    };

    let observer: IntersectionObserver;

    const initObserver = () => {
      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const newTheme = entry.target.getAttribute(
                'data-section-theme',
              ) as 'light' | 'dark';
              setTheme(newTheme);
            }
          }
        },
        {
          rootMargin: getRootMargin(),
          threshold: 0,
        },
      );

      for (const section of sections) {
        observer.observe(section);
      }
    };

    initObserver();

    // Re-initialize observer on resize to update rootMargin properly
    window.addEventListener('resize', initObserver);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', initObserver);
    };
  }, []);

  return (
    <nav className="fixed right-0 bottom-4 left-0 z-10 mx-auto h-14 w-[80%] content-center overflow-hidden rounded-full border bg-gray-0 bg-opacity-0 bg-clip-padding shadow-md backdrop-blur-lg backdrop-filter md:top-0 md:flex md:h-20 md:w-full md:items-center md:rounded-none md:border-none">
      <div className="hidden size-20 md:block">
        <img
          src={logo.src}
          alt="Logo"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <ul className="flex w-full flex-2 justify-around p-0 md:px-4 md:py-6">
        {MenuMock.map((item, index) => (
          <li
            className="group transition-colors duration-500 data-[theme=dark]:text-white data-[theme=light]:text-black"
            key={item.href || index}
            data-theme={theme}
          >
            <a href={item.href} className="font-medium">
              <span className="hidden md:block">{item.label}</span>
              <Icon name={item.icon} className="size-5 stroke-1.5 md:hidden" />
            </a>
            <hr className="h-0.5 w-0 border-none bg-amber-600 transition-all duration-500 group-hover:w-full" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
