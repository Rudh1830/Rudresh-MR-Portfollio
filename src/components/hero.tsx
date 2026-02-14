'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Typewriter } from '@/components/typewriter';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-primary font-medium mb-4 flex items-center gap-2">
                        <span className="w-12 h-[1px] bg-primary" />
                        Hello, I am
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        rudresh<span className="text-primary">.mr</span>
                    </h1>
                    <div className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground h-16">
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
                    <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
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

                    <div className="flex items-center gap-6 relative z-20">
                        <a href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830'}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">
                            <Github size={24} />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/rudresh-m-r-842022298'} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">
                            <Linkedin size={24} />
                        </a>
                        <a href={`https://www.kaggle.com/${process.env.NEXT_PUBLIC_KAGGLE_USERNAME || 'rudresh18'}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">
                            <span className="font-bold text-xl leading-none">K</span>
                        </a>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'rudreshramasamy@gmail.com'}`} className="hover:text-primary transition-colors cursor-pointer">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Glass decoration */}
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-[2.5rem] rotate-6 scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2.5rem] -rotate-3" />

                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-background shadow-2xl">
                            {/* Using a placeholder since I can't "see" the image as a file yet if not uploaded specifically, 
                  but the user said they uploaded it. I'll check public folder. */}
                            <Image
                                src="/photo.png"
                                alt="rudresh.mr"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
