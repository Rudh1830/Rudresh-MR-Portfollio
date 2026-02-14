'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-primary mb-2">rudresh<span className="text-foreground">.mr</span></h2>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Building modern solutions with passion and precision.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830'}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-background border rounded-full hover:border-primary hover:text-primary transition-all">
                            <Github size={20} />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com'} target="_blank" rel="noopener noreferrer" className="p-3 bg-background border rounded-full hover:border-primary hover:text-primary transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'rudreshramasamy@gmail.com'}`} className="p-3 bg-background border rounded-full hover:border-primary hover:text-primary transition-all">
                            <Mail size={20} />
                        </a>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full shadow-lg"
                    >
                        <ArrowUp size={20} />
                    </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground pt-8 border-t">
                    <p>© {new Date().getFullYear()} rudresh.mr. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
