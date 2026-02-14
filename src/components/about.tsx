'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, GraduationCap, LayoutPanelLeft, Terminal } from 'lucide-react';

const skills = [
    {
        category: 'AI & Data Science',
        icon: <Terminal className="w-5 h-5" />,
        items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV', 'Keras', 'NLTK'],
    },
    {
        category: 'Languages & Core',
        icon: <Code2 className="w-5 h-5" />,
        items: ['Python', 'Java', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'R'],
    },
    {
        category: 'Development Hub',
        icon: <LayoutPanelLeft className="w-5 h-5" />,
        items: ['React', 'Next.js', 'Node.js', 'Git', 'Docker', 'AWS', 'PostgreSQL', 'Tableau'],
    },
];

const education = [
    {
        degree: 'B.Tech in Artificial Intelligence and Data Science',
        institution: 'Karpagam College of Engineering',
        period: '2023 - 2027',
        description: 'Current CGPA: 8.0. Focused on Machine Learning, Data Analytics, and Advanced Algorithms.',
    },
];

export function About() {
    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Introduction & Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <BookOpen className="text-primary" /> Introduction
                        </h3>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            I am an Artificial Intelligence and Data Science student at Karpagam College of Engineering,
                            with a deep passion for leveraging machine learning and data analytics to solve real-world problems.
                            My focus lies in building intelligent models, performing complex data analysis, and developing
                            end-to-end AI solutions that are both efficient and ethical.
                        </p>

                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <GraduationCap className="text-primary" /> Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <div key={idx} className="glass p-6 rounded-2xl">
                                    <h4 className="font-bold text-xl mb-1">{edu.degree}</h4>
                                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                                    <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                                    <p className="text-muted-foreground">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Code2 className="text-primary" /> Skills
                        </h3>
                        <div className="space-y-6">
                            {skills.map((skillGroup, idx) => (
                                <div key={idx} className="glass p-6 rounded-2xl overflow-hidden relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                            {skillGroup.icon}
                                        </span>
                                        <h4 className="font-bold text-lg">{skillGroup.category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-1.5 bg-background border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
