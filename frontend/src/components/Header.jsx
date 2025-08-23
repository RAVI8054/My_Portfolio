
import React, { useContext, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeContext from '../context/ThemeContext';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const navItems = [
        { text: "About", link: "#about" },
        { text: "Experience", link: "#experience" },
        { text: "Skills", link: "#skills" },
        { text: "Projects", link: "#projects" },
        { text: "Contact", link: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#09090B] text-black dark:text-white border-b border-gray-200 dark:border-gray-700 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 shadow-sm transition-all duration-300">
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between py-4">

                {/* Left: Logo */}
                <div className="text-xl font-bold tracking-tight text-gray-800 dark:text-white transition duration-300 hover:text-primary transform hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]">
                    Ravi's Portfolio
                </div>

                {/* Center: Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-base font-medium text-gray-600 dark:text-gray-300">
                        {navItems.map(function (item) {
                            return (
                                <li key={item.text}>
                                    <a
                                        href={item.link}
                                        className="relative inline-block px-1 py-0.5 group transform transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 hover:text-primary"
                                    >
                                        {item.text}
                                        <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Right: Theme Toggle and Hamburger */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 group"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <FiSun className="text-yellow-400 group-hover:animate-spin-slow transition-transform duration-500" size={22} />
                        ) : (
                            <FiMoon className="text-gray-800 group-hover:text-primary transition duration-500 group-hover:scale-110" size={22} />
                        )}
                    </button>

                    {/* Hamburger Menu Button - only on small screens */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </div>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden px-6 py-4 border-t border-gray-200 dark:border-gray-700 backdrop-blur-lg"
                        style={{
                            background: theme === 'dark'
                                ? "rgba(9,9,11,0.85)"
                                : "rgba(255,255,255,0.85)",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                            borderRadius: "0 0 12px 12px"
                        }}
                    >
                        <ul className="flex flex-col gap-4 text-base font-medium text-gray-600 dark:text-gray-300">
                            {navItems.map(function (item) {
                                return (
                                    <li key={item.text}>
                                        <a
                                            href={item.link}
                                            onClick={function () { setMenuOpen(false); }}
                                            className="block px-1 py-2 transition-colors duration-300 hover:text-primary"
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;

