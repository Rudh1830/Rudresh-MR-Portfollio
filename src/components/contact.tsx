'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-10 right-0 h-64 w-64 bg-primary/20 blur-3xl rounded-full" />
            <div className="section-wrap relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="section-heading mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass p-8 rounded-3xl"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Mail className="text-primary" /> Contact Details
                        </h3>

                        <div className="space-y-4 relative z-20">
                            <a
                                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'rudreshramasamy@gmail.com'}`}
                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-colors group"
                            >
                                <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-semibold">{process.env.NEXT_PUBLIC_EMAIL || 'rudreshramasamy@gmail.com'}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${process.env.NEXT_PUBLIC_PHONE || '9566970199'}`}
                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-colors group"
                            >
                                <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-semibold">{process.env.NEXT_PUBLIC_PHONE || '9566970199'}</p>
                                </div>
                            </a>

                            <a
                                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/rudresh-m-r-842022298'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-colors group"
                            >
                                <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                    <Linkedin size={22} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                                    <p className="font-semibold line-clamp-1">linkedin.com/in/Rudresh.MR</p>
                                </div>
                            </a>

                            <a
                                href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830'}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-colors group"
                            >
                                <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                    <Github size={22} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">GitHub</p>
                                    <p className="font-semibold line-clamp-1">github.com/{process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830'}</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
