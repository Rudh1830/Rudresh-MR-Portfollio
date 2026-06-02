'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder, Github, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
    fork: boolean;
}

const FALLBACK_REPOS: Repository[] = [
    {
        id: 1180000001,
        name: 'Speaker Identification System',
        description: 'Machine learning project for identifying speakers from audio using speech features and speaker recognition techniques.',
        html_url: 'https://github.com/Rudh1830?tab=repositories&q=speaker',
        homepage: '',
        stargazers_count: 0,
        forks_count: 0,
        language: 'Python',
        topics: ['Speaker Identification', 'Audio AI', 'Machine Learning'],
        fork: false,
    },
    {
        id: 1171480901,
        name: 'Smart Manufacturing Analytics',
        description: 'Lightweight data analytics system for reducing rejection rates in small industries using Pareto analysis and control charts.',
        html_url: 'https://github.com/Rudh1830/Data-Analytics-Model-To-Reduce-Rejection-Rates-In-Small-Industries',
        homepage: '',
        stargazers_count: 8,
        forks_count: 3,
        language: 'Python',
        topics: ['Data Analytics', 'Streamlit', 'Manufacturing'],
        fork: false,
    },
    {
        id: 1143037499,
        name: 'Real-Time News Data Pipeline',
        description: 'End-to-end data engineering project streaming news into Snowflake via Kafka and Docker.',
        html_url: 'https://github.com/Rudh1830/Real-Time-News-Data-Streaming-Pipeline-Using-Snowflake-and-Docker',
        homepage: '',
        stargazers_count: 10,
        forks_count: 4,
        language: 'Python',
        topics: ['Snowflake', 'Kafka', 'Docker'],
        fork: false,
    },
    {
        id: 1139718910,
        name: 'YOLOv8 Intruder Detection',
        description: 'AI-powered security system using YOLOv8 and Gradio for real-time intruder monitoring and capture.',
        html_url: 'https://github.com/Rudh1830/Intruder-Detection-System-Using-YOLOv8-with-Gradio-Interface',
        homepage: '',
        stargazers_count: 15,
        forks_count: 5,
        language: 'Python',
        topics: ['Computer Vision', 'YOLOv8', 'AI'],
        fork: false,
    },
    {
        id: 1142247108,
        name: 'Breast Cancer Neural Network',
        description: 'Deep learning model for tumor classification (malignant/benign) with high accuracy.',
        html_url: 'https://github.com/Rudh1830/Breast-Cancer-Classification-Using-Neural-Network',
        homepage: '',
        stargazers_count: 12,
        forks_count: 4,
        language: 'Python',
        topics: ['Deep Learning', 'Neural Networks', 'MedTech'],
        fork: false,
    },
    {
        id: 1127171750,
        name: 'AI Ticketing Assistant',
        description: 'NLP-based transportation assistant for route queries and fare information.',
        html_url: 'https://github.com/Rudh1830/Smart-Transportation-Ticketing-Assistant',
        homepage: '',
        stargazers_count: 7,
        forks_count: 2,
        language: 'JavaScript',
        topics: ['AI', 'NLP', 'Transportation'],
        fork: false,
    },
    {
        id: 1139655080,
        name: 'Market Basket Analysis',
        description: 'Mining purchasing patterns using FP-Growth algorithm on retail transaction data.',
        html_url: 'https://github.com/Rudh1830/Market-Basket-Analysis-Using-FP-Growth-Algorithm',
        homepage: '',
        stargazers_count: 6,
        forks_count: 2,
        language: 'Python',
        topics: ['Data Mining', 'Machine Learning'],
        fork: false,
    },
];

export function Projects() {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchRepos = async () => {
        try {
            setLoading(true);
            setError(false);
            const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Rudh1830';
            const response = await fetch(
                `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
            );

            if (response.status === 403) {
                console.warn('GitHub API rate limit exceeded. Using fallback projects.');
                setRepos(FALLBACK_REPOS);
                return;
            }

            if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

            const data: Repository[] = await response.json();

            const importantRepoNames = [
                'Speaker-Identification',
                'Speaker-Identification-System',
                'Speaker-Recognition',
                'Speaker-Recognition-System',
                'Speaker-Identification-Python',
                'Intruder-Detection-System-Using-YOLOv8-with-Gradio-Interface',
                'Real-Time-News-Data-Streaming-Pipeline-Using-Snowflake-and-Docker',
                'Data-Analytics-Model-To-Reduce-Rejection-Rates-In-Small-Industries',
                'Breast-Cancer-Classification-Using-Neural-Network',
                'Smart-Transportation-Ticketing-Assistant',
                'Market-Basket-Analysis-Using-FP-Growth-Algorithm'
            ];

            const sortedRepos = data
                .filter(repo => !repo.fork && repo.name !== username)
                .sort((a, b) => {
                    const aName = a.name.toLowerCase();
                    const bName = b.name.toLowerCase();
                    const aSpeakerProject = aName.includes('speaker') && (aName.includes('identification') || aName.includes('recognition'));
                    const bSpeakerProject = bName.includes('speaker') && (bName.includes('identification') || bName.includes('recognition'));
                    const aImportant = importantRepoNames.includes(a.name) || aSpeakerProject ? 1 : 0;
                    const bImportant = importantRepoNames.includes(b.name) || bSpeakerProject ? 1 : 0;
                    if (aImportant !== bImportant) return bImportant - aImportant;
                    return b.stargazers_count - a.stargazers_count;
                });

            const topRepos = sortedRepos.slice(0, 7);
            setRepos(topRepos.length > 0 ? topRepos : FALLBACK_REPOS);
        } catch (err) {
            console.error('Error fetching GitHub repos:', err);
            setRepos(FALLBACK_REPOS);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="py-24">
                <div className="section-wrap">
                    <div className="text-center mb-16">
                        <div className="h-12 w-48 bg-muted animate-pulse mx-auto rounded-xl mb-4" />
                        <div className="h-1 w-24 bg-primary/20 mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <div key={i} className="glass h-72 rounded-3xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="py-24">
                <div className="section-wrap text-center">
                    <p className="text-destructive font-medium mb-4">Failed to load projects. Please try again later.</p>
                    <Button variant="outline" onClick={() => fetchRepos()}>
                        Retry Loading
                    </Button>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-24">
            <div className="section-wrap">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="section-heading mb-4 flex items-center justify-center gap-3">
                        <Github className="text-primary" /> Top Projects
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo, idx) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.08 }}
                            className="group glass p-7 rounded-3xl flex flex-col hover:border-primary/55 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Folder size={72} />
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <span className="p-3 bg-primary/12 rounded-2xl text-primary">
                                    <Github size={22} />
                                </span>
                                <div className="flex gap-4 text-muted-foreground">
                                    <span className="group-hover:text-primary transition-colors">
                                        <Github size={19} />
                                    </span>
                                    {repo.homepage && (
                                        <span className="hover:text-primary transition-colors">
                                            <ExternalLink size={19} />
                                        </span>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {repo.name}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed min-h-[64px]">
                                {repo.description || 'No description provided.'}
                            </p>

                            <div className="mt-auto pt-5 border-t border-border/70 flex items-center justify-between gap-4">
                                <div className="flex gap-2">
                                    {repo.language && (
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md border bg-background/55">
                                            {repo.language}
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-4 text-muted-foreground text-sm">
                                    <span className="flex items-center gap-1">
                                        <Star size={14} /> {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork size={14} /> {repo.forks_count}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <Button variant="outline" className="rounded-full px-8" asChild>
                        <a href="https://github.com/Rudh1830" target="_blank" rel="noopener noreferrer">
                            Load More Repositories
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
