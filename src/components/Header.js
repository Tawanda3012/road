import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { 
      name: 'Services', 
      to: '/services',
      // dropdown: [
      //   { name: 'Car', to: '/services/car' },
      //   { name: 'Accidents', to: '/services/accidents' },
      //   { name: 'Consulting', to: '/services/consulting' },
      //   { name: 'Support', to: '/services/support' }
      // ]
    },
    { name: 'Testimonials', to: '/testimonials' },
    { name: 'Contact', to: '/contact' }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="text-2xl font-bold text-blue-600">
             Chidhakwa
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-1 md:flex">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div className="relative group">
                    <button
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.to}
                            className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between block w-full px-3 py-2 text-base font-medium text-left text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-gray-100"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {isDropdownOpen && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.to}
                          className="block px-3 py-2 text-sm text-gray-600 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-gray-50"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.to}
                  className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile CTA Button */}
          <div className="pt-4 border-t border-gray-200">
            <button 
              className="w-full px-3 py-2 text-base font-medium text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;