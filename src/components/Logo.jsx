import { Link } from 'react-router-dom';

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Gaming Controller Icon */}
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg 
            className="w-6 h-6 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M7.97 16.06c.8 0 1.54-.37 2.03-.99l2.03-2.58c.49-.62 1.23-.99 2.03-.99s1.54.37 2.03.99l2.03 2.58c.49.62 1.23.99 2.03.99 1.66 0 3-1.34 3-3V9c0-4.42-3.58-8-8-8H9c-4.42 0-8 3.58-8 8v4.06c0 1.66 1.34 3 3 3z"/>
            <circle cx="9" cy="9" r="1"/>
            <circle cx="15" cy="9" r="1"/>
            <path d="M12 13h2v2h-2z"/>
            <path d="M10 13h2v2h-2z"/>
          </svg>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur-md opacity-30 -z-10"></div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          GameForge
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          Pro Setup Builder
        </span>
      </div>
    </Link>
  );
};

export default Logo;