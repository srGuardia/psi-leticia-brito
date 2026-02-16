import logo from '@/assets/images/logo.png';
import { MenuMock } from '@/mock';

export function Menu() {
  return (
    <nav className="fixed right-0 bottom-4 left-0 z-10 mx-auto h-20 w-[80%] overflow-hidden rounded-full border bg-gray-0 bg-opacity-0 bg-clip-padding shadow-md backdrop-blur-lg backdrop-filter md:top-0 md:flex md:w-full md:items-center md:rounded-none md:border-none">
      <div className="hidden size-20 md:block">
        <img
          src={logo.src}
          alt="Logo"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <ul className="flex w-full flex-2 justify-around px-4 py-6">
        {MenuMock.map((item, index) => (
          <li className="group text-white" key={item.href || index}>
            <a href={item.href}>{item.label}</a>
            <hr className="h-0.5 w-0 border-none bg-amber-600 transition-all duration-500 group-hover:w-full" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
