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
        id: 0,
        name: 'Real-Time-News-Data-Streaming-Pipeline',
        description: 'An end-to-end data streaming pipeline for news data utilizing Snowflake, Docker, and Kafka for real-time processing and storage.',
        html_url: 'https://github.com/Rudh1830/Real-Time-News-Data-Streaming-Pipeline-Using-Snowflake-and-Docker',
        homepage: '',
        stargazers_count: 10,
        forks_count: 4,
        language: 'Python',
        topics: ['Snowflake', 'Docker', 'Kafka', 'Data Engineering', 'Real-time'],
        fork: false,
    },
    {
        id: 1,
        name: 'Cricket-Player-Run-Prediction',
        description: 'A machine learning model using Logistic Regression to predict cricket player run outcomes based on historical match data. Built with Streamlit.',
        html_url: 'https://github.com/Rudh1830',
        homepage: '',
        stargazers_count: 5,
        forks_count: 2,
        language: 'Python',
        topics: ['Machine Learning', 'Streamlit', 'Scikit-learn'],
        fork: false,
    },
    {
        id: 2,
        name: 'Smart-Transportation-System',
        description: 'Price comparison and recommendation system for flights, trains, buses, and cab services. Integrated with Flask for web delivery.',
        html_url: 'https://github.com/Rudh1830',
        homepage: '',
        stargazers_count: 4,
        forks_count: 1,
        language: 'Python',
        topics: ['Flask', 'Data Analysis', 'Web Development'],
        fork: false,
    },
    {
        id: 3,
        name: 'AI-Text-to-Image-Generator',
        description: 'AI-powered text-to-image generation application using Gradio and Generative AI concepts.',
        html_url: 'https://github.com/Rudh1830',
        homepage: '',
        stargazers_count: 7,
        forks_count: 3,
        language: 'Python',
        topics: ['Generative AI', 'Gradio', 'Neural Networks'],
        fork: false,
    },
    {
        id: 4,
        name: 'Resume-Portfolio-Assistant',
        description: 'Web-based application for generating professional resumes and portfolios with real-time preview.',
        html_url: 'https://github.com/Rudh1830',
        homepage: '',
        stargazers_count: 6,
        forks_count: 2,
        language: 'JavaScript',
        topics: ['HTML', 'CSS', 'Flask'],
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
                `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`
            );

            if (response.status === 403) {
                console.warn('GitHub API rate limit exceeded. Using fallback projects.');
                setRepos(FALLBACK_REPOS);
                return;
            }

            if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

            const data: Repository[] = await response.json();

            // From github add only real time data pipeline project
            const dataPipelineRepo = data.find(repo =>
                repo.name === 'Real-Time-News-Data-Streaming-Pipeline-Using-Snowflake-and-Docker' ||
                repo.name.toLowerCase().includes('data-streaming-pipeline') ||
                repo.description?.toLowerCase().includes('snowflake') && repo.description?.toLowerCase().includes('docker')
            );

            if (dataPipelineRepo) {
                // Filter out the dataPipelineRepo from fallback to avoid duplicates
                const filteredFallbacks = FALLBACK_REPOS.filter(repo =>
                    repo.id !== dataPipelineRepo.id &&
                    repo.name !== dataPipelineRepo.name &&
                    repo.name !== 'Real-Time-News-Data-Streaming-Pipeline'
                );
                const otherRepos = filteredFallbacks.slice(0, 5);
                setRepos([dataPipelineRepo, ...otherRepos]);
            } else {
                setRepos(FALLBACK_REPOS);
            }
        } catch (err) {
            console.error('Error fetching GitHub repos:', err);
            setRepos(FALLBACK_REPOS);
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
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="h-12 w-48 bg-muted animate-pulse mx-auto rounded-xl mb-4" />
                        <div className="h-1 w-24 bg-primary/20 mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="glass h-64 rounded-3xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
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
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Github className="text-primary" /> Top Projects
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {repos.map((repo, idx) => (
                        <motion.div
                            key={repo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group glass p-8 rounded-3xl flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Folder size={80} />
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <span className="p-3 bg-primary/10 rounded-2xl text-primary">
                                    <Github size={24} />
                                </span>
                                <div className="flex gap-4">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Github size={20} />
                                    </a>
                                    {repo.homepage && (
                                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">
                                {repo.name}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 line-clamp-3 h-15 leading-relaxed">
                                {repo.description || 'No description provided.'}
                            </p>

                            <div className="mt-auto pt-6 border-t flex items-center justify-between">
                                <div className="flex gap-3">
                                    {repo.language && (
                                        <span className="text-xs font-semibold px-2 py-1 bg-secondary/50 rounded-md">
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
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" className="rounded-full px-8" asChild>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            Load More Repositories
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
