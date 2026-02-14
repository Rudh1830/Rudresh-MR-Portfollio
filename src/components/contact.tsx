'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        alert('Thank you! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="glass p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <MessageSquare className="text-primary" /> Contact Details
                            </h3>

                            <div className="space-y-6">
                                <a
                                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'rudreshramasamy@gmail.com'}`}
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-colors group"
                                >
                                    <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
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
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Phone</p>
                                        <p className="font-semibold">{process.env.NEXT_PUBLIC_PHONE || '9566970199'}</p>
                                    </div>
                                </a>

                                <a
                                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-colors group"
                                >
                                    <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                                        <p className="font-semibold line-clamp-1">linkedin.com/in/rudresh-m-r</p>
                                    </div>
                                </a>

                                <a
                                    href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830'}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-colors group"
                                >
                                    <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                        <Github size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">GitHub</p>
                                        <p className="font-semibold line-clamp-1">github.com/{process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830'}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-background/50 border-2 rounded-2xl px-4 py-3 focus:border-primary outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full bg-background/50 border-2 rounded-2xl px-4 py-3 focus:border-primary outline-none transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-background/50 border-2 rounded-2xl px-4 py-3 focus:border-primary outline-none transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <Button type="submit" className="w-full rounded-2xl h-12 gap-2" size="lg">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
