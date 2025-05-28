import { HomeIcon, UserIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 text-blue-900 dark:text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left side: Logo and Links */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:underline">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:underline">
              <UserIcon className="h-5 w-5" />
              <span>About</span>
            </Link>
          </div>

          {/* Right side: Theme toggle button */}
          <div className="ml-auto">
            <button onClick={toggleTheme} className="flex items-center space-x-1 hover:underline">
              {theme === 'light' ? (
                <>
                  <MoonIcon className="h-5 w-5" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <SunIcon className="h-5 w-5" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;