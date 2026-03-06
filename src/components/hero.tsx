'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Typewriter } from '@/components/typewriter';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
            <div className="absolute -top-24 -left-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />

            <div className="section-wrap grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary mb-5">
                        AI Student Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-5 tracking-tight leading-tight">
                        Rudresh<span className="text-primary">.MR</span>
                    </h1>
                    <div className="text-2xl md:text-3xl font-semibold mb-5 text-foreground/80 h-16">
                        <Typewriter
                            words={[
                                'AI Resident & Innovator',
                                'Machine Learning Engineer',
                                'Data Science Enthusiast',
                                'Predictive Analytics Expert',
                                'Full Stack AI Developer',
                            ]}
                        />
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                        An Artificial Intelligence and Data Science student at Karpagam College of Engineering,
                        passionate about building intelligent systems and extracting insights from complex data.
                        Currently exploring the frontiers of Deep Learning and Generative AI.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <Button size="lg" className="rounded-full gap-2" asChild>
                            <a href="#projects">
                                View Projects <ExternalLink size={18} />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full gap-2" asChild>
                            <a href="/resume.pdf" download>
                                Download Resume <Download size={18} />
                            </a>
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 relative z-20">
                        <a href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830'}`} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border bg-background/50 hover:text-primary hover:border-primary/40 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/rudresh-m-r-842022298'} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border bg-background/50 hover:text-primary hover:border-primary/40 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={`https://www.kaggle.com/${process.env.NEXT_PUBLIC_KAGGLE_USERNAME || 'rudresh18'}`} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border bg-background/50 hover:text-primary hover:border-primary/40 transition-colors">
                            <span className="font-bold text-base leading-none">K</span>
                        </a>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'rudreshramasamy@gmail.com'}`} className="p-2.5 rounded-xl border bg-background/50 hover:text-primary hover:border-primary/40 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem]">
                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/35 via-transparent to-accent/35 blur-sm" />
                        <div className="absolute inset-3 border border-primary/40 rounded-[2.2rem] -rotate-2" />
                        <div className="absolute inset-0 rounded-[2.4rem] bg-white/25 dark:bg-black/25 backdrop-blur-md" />

                        <div className="absolute inset-4 rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl shadow-black/20">
                            <Image
                                src="/photo.png"
                                alt="Rudresh.MR"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
