'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useTerminal } from './TerminalProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleVisibility } = useTerminal();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full shadow-md dark:shadow-[0_4px_12px_-2px_rgba(255,255,255,0.15)] transition-all duration-300 z-50 ${
      isScrolled ? 'bg-white/50 dark:bg-black/50 backdrop-blur-md border-black dark:border-white' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-center items-center h-16 md:h-20 relative">

          <div className="absolute left-0">
            <Link 
              href="/#hero"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className="text-black dark:text-white text-base md:text-xl font-semibold transition-colors duration-300">
                Dhruvesh Patil
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div 
            className={`hidden md:flex items-center bg-transparent border transition-all duration-300 ${
              isScrolled ? 'border-black dark:border-white/20' : 'border-black dark:border-transparent'
            }`}
          >
            {[
              ['Home', '/'],
              ['About Me', '/about'],
              ['Experience', '/experience'],
              ['Projects', '/projects'],
              ['Skills', '/skills'],
              ['Gallery', '/gallery'],
              ['Contact Me', '/contact'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="relative text-black dark:text-white text-sm lg:text-base px-2 lg:px-4 py-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="absolute right-0 hidden md:block">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toggleVisibility()}
                aria-label="Toggle terminal"
                className="w-10 h-10 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
              >
                <span className="font-mono text-base leading-none">&gt;_</span>
              </button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute right-0 md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => toggleVisibility()}
              className="w-10 h-10 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
              aria-label="Toggle terminal"
            >
              <span className="font-mono text-base leading-none">&gt;_</span>
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 rounded-full"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-black backdrop-blur-md border-t border-black dark:border-white shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-3 pt-2 pb-3 space-y-1">
          <button
            type="button"
            onClick={() => {
              toggleVisibility();
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
          >
            <span className="font-mono">&gt;_</span>
          </button>
          {[
            ['Home', '/'],
            ['About Me', '/about'],
            ['Experience', '/experience'],
            ['Projects', '/projects'],
            ['Skills', '/skills'],
            ['Gallery', '/gallery'],
            ['Contact Me', '/contact'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
