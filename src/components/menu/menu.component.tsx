import logo from '@/assets/images/logo.png';
import { MenuMock } from '@/mock';
import { useEffect, useState } from 'react';

export function Menu() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-section-theme]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const newTheme = entry.target.getAttribute('data-section-theme') as
              | 'light'
              | 'dark';
            setTheme(newTheme);
          }
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
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
              {item.label}
            </a>
            <hr className="h-0.5 w-0 border-none bg-amber-600 transition-all duration-500 group-hover:w-full" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
