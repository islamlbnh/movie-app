const Header = () => {
  return (
    <div>
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">🎬 Movie App</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/movies"
                className="hover:text-yellow-400 transition-colors">
                Movies
              </a>
            </li>
            <li>
              <a
                href="/favorites"
                className="hover:text-yellow-400 transition-colors">
                Favorites
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
