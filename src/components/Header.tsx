import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    // Fixed header with full width, slight transparency, blur effect, shadow and high z-index
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Deepak Kumar</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
