'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4',
                isScrolled ? 'backdrop-blur-xl border-b border-border/70 bg-background/72 shadow-lg shadow-black/5' : 'bg-transparent'
            )}
        >
            <div className="section-wrap flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl md:text-2xl font-bold tracking-tight"
                >
                    <span className="text-primary">Rudresh</span>
                    <span className="text-foreground">.MR</span>
                </motion.div>

                <div className="hidden md:flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-2 shadow-md shadow-black/5 backdrop-blur">
                    {navItems.map((item, idx) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10"
                        >
                            {item.name}
                        </motion.a>
                    ))}
                    <div className="ml-1">
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden flex items-center space-x-3">
                    <ModeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 border rounded-lg bg-background/80 hover:bg-accent/15 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-3 section-wrap"
                    >
                        <div className="glass rounded-2xl overflow-hidden p-3 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium px-3 py-2 rounded-lg hover:bg-primary/12 hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
