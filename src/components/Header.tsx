import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { LuMenu, LuX } from "react-icons/lu";

import { ContactModal } from './Contact';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const NAVLINKS = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/menu', label: 'Menu' },
        { to: '/franchise', label: 'Franchise' },
        { to: '/locations', label: 'Location' },
        { to: '/blogs', label: 'Blogs' },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-header) px-4 backdrop-blur-lg">
            <nav className="page-wrap flex flex-wrap md:justify-between items-center gap-x-3 gap-y-2 py-1 sm:py-2">
                <Link to="/">
                    <img 
                    src="/logos/afc-logo.webp" 
                    alt="Site Logo"
                    width={200} 
                    height={200}
                    loading="eager"
                    fetchPriority="high"
                    className="h-12 w-auto md:h-15" 
                    />
                </Link>

                <div className="hidden w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-md font-semibold md:flex md:w-auto md:flex-nowrap md:pb-0">
                    {NAVLINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="nav-link"
                            activeProps={{ className: 'nav-link is-active' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => setIsContactOpen(true)}
                    className="ml-auto md:ml-0 shrink-0 font-semibold tracking-tight">
                    <p className="button-primary text-sm px-3 py-1.5 md:px-4 md:py-2">
                        Contact Us
                    </p>
                </button>

                <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

                <button
                    type="button"
                    className="md:hidden relative h-6 w-6 shrink-0"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <LuMenu
                        className={`absolute inset-0 text-2xl transition-all duration-300 ${isMenuOpen ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
                            }`}
                    />
                    <LuX
                        className={`absolute inset-0 text-2xl transition-all duration-300 ${isMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'
                            }`}
                    />
                </button>

                <div
                    id="mobile-nav"
                    inert={!isMenuOpen}
                    className={`order-last grid w-full transition-[grid-template-rows] duration-300 ease-out md:hidden ${isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div
                            className={`flex flex-col items-end gap-1 border-t border-gray-300 pt-3 pb-1 text-md font-semibold transition-all duration-300 ease-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                                }`}
                        >
                            {NAVLINKS.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="nav-link py-2"
                                    activeProps={{ className: 'nav-link is-active' }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}