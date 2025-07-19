const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* Main credit */}
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-600 dark:text-gray-400">Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-gray-600 dark:text-gray-400">by</span>
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Be_A_Learner
            </span>
          </div>
          
          {/* Tech stack */}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Built with React.js + Tailwind CSS + React Router
          </p>
          
          {/* Copyright */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-400 dark:text-gray-500 text-xs">
              © 2025 GameForge Pro Setup Builder. All rights reserved.
            </p>
          </div>
          
          {/* Social links placeholder */}
          <div className="flex justify-center space-x-4 pt-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">BL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;