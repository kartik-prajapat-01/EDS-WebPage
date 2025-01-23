
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="EDs.ico" alt="/logo " />
            <div>
              <div className="font-bold text-xl text-gray-900 dark:text-white">Echelon Dev Society </div>
              <div className="text-gray-700 dark:text-gray-300">Hackathon Club of CDGI</div>
            </div>
          </div>
         
          
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
            <a href="#events" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Events</a>
            <a href="#team" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Team</a>
            <button
              onClick={(toggleTheme)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
         
        </div>
      </div>
    </nav>
  );
}