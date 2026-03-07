import { Image } from 'astro:assets';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import logo from '@/assets/images/logo.png';
import { menuMock } from '@/mock';
import { Icon } from '../icon';

const styles = {
  mobile: 'bottom-4 z-10 rounded-full w-[80%] p-6 mx-auto inset-x-0',
  default: 'md:top-0 md:flex md:h-20 md:w-full md:items-center',
};

export function Menu() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [menuMobile, setMenuMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-theme]');

    const getRootMargin = () => {
      const isMobile = window.innerWidth < 768;
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

  useEffect(() => {
    const handleResize = () => {
      setMenuMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={twMerge(
        'fixed z-10 bg-opacity-0 bg-clip-padding shadow-md backdrop-blur-lg backdrop-filter',
        styles.default,
        menuMobile && styles.mobile,
      )}
    >
      <div className="hidden size-20 md:block">
        <picture>
          <source
            srcSet="/logo.webp"
            type="image/webp"
            className="h-full w-full object-contain"
          />

          <Image
            src={logo}
            alt="Logo"
            class="h-full w-full object-contain"
            loading="lazy"
          />
        </picture>
      </div>

      <ul className="flex w-full flex-2 justify-around p-0 md:px-4 md:py-6">
        {menuMock.map((item, index) => (
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
