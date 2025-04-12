import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center hover:text-purple-400 transition-colors">
            <FiCode className="h-8 w-8 mr-2 text-purple-400" />
            <span className="text-xl font-bold">Mohammed</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-purple-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-4 ml-4">
              <a
                href="https://github.com/mohamakin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-awel-91457018a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:makinhakim529@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/mohamakin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-awel-91457018a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
                </a>
              <a
                href="mailto:makinhakim529@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;