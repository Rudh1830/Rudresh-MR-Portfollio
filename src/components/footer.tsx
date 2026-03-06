'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-border/70 bg-secondary/30">
            <div className="section-wrap">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2"><span className="text-primary">Rudresh</span><span className="text-foreground">.MR</span></h2>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Building modern solutions with passion and precision.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830'}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-background/70 border rounded-xl hover:border-primary hover:text-primary transition-all">
                            <Github size={18} />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com'} target="_blank" rel="noopener noreferrer" className="p-3 bg-background/70 border rounded-xl hover:border-primary hover:text-primary transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'rudreshramasamy@gmail.com'}`} className="p-3 bg-background/70 border rounded-xl hover:border-primary hover:text-primary transition-all">
                            <Mail size={18} />
                        </a>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full shadow-lg"
                    >
                        <ArrowUp size={18} />
                    </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border/70">
                    <p>© {new Date().getFullYear()} Rudresh.MR. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
