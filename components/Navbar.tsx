'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`fixed top-0 left-0 w-full shadow-md border-b transition-all duration-300 z-9999 ${
      isScrolled ? 'bg-white/50 dark:bg-black/50 backdrop-blur-md border-gray-200 dark:border-white/10' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 relative">

          <div className="absolute left-0">
            <Link href="/">
              <span className="text-gray-900 dark:text-[#E5E7EB] text-xl font-semibold hover:text-[#38BDF8] transition-colors duration-300">
                Dhruvesh Patil
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div 
            className={`hidden md:flex items-center bg-transparent border transition-all duration-300 ${
              isScrolled ? 'border-black dark:border-white/20' : 'border-black dark:border-transparent'
            }`}
            style={{
              boxShadow: '0 0 15px rgba(128, 128, 128, 0.1), 0 0 8px rgba(128, 128, 128, 0.05)'
            }}
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
                className="relative text-gray-900 dark:text-[#E5E7EB] text-base px-4 py-2 hover:bg-gray-900 dark:hover:bg-[#ffffff] hover:text-white dark:hover:text-black transition-all duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="absolute right-0 hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute right-0 md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-900 dark:text-[#E5E7EB] hover:text-[#38BDF8]"
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
        className={`md:hidden bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-t border-gray-200 dark:border-white/10 shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2">
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
              className="block w-full text-left px-4 py-3 rounded-lg text-gray-900 dark:text-[#E5E7EB] hover:bg-[#38BDF8] hover:text-white transition-all duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
