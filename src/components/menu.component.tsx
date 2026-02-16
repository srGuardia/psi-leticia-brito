export function Menu() {
  return (
    <nav className="fixed bottom-4 z-10 h-20 w-full bg-transparent md:top-0">
      <ul className="mx-auto flex max-w-[80%] justify-around rounded-4xl border border-gray-100 bg-gray-0 bg-opacity-0 bg-clip-padding px-4 py-6 text-white backdrop-blur-lg backdrop-filter md:max-w-full md:border-none">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
