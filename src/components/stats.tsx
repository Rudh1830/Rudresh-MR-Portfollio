'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Award, Code, Globe, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeetCodeStats {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    ranking: number;
    contributionPoints: number;
    reputation: number;
}

export function Stats() {
    const [stats, setStats] = useState<LeetCodeStats | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/leetcode');
                const data = await response.json();

                if (!data.error) {
                    setStats({
                        totalSolved: data.totalSolved,
                        easySolved: data.easySolved,
                        mediumSolved: data.mediumSolved,
                        hardSolved: data.hardSolved,
                        ranking: data.ranking || 0,
                        contributionPoints: data.contributionPoints || 0,
                        reputation: data.reputation || 0,
                    });
                } else {
                    console.error('API Error:', data.error);
                }
            } catch (err) {
                console.error('Error fetching LeetCode stats:', err);
            }
        };
        fetchStats();
    }, []);

    const chartData = stats ? [
        { name: 'Easy', value: stats.easySolved, color: '#10b981' },
        { name: 'Medium', value: stats.mediumSolved, color: '#f59e0b' },
        { name: 'Hard', value: stats.hardSolved, color: '#ef4444' },
    ] : [];

    return (
        <section id="stats" className="py-24">
            <div className="section-wrap">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="section-heading mb-4 flex items-center justify-center gap-3">
                        <Code className="text-primary" /> Coding Stats
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 glass p-8 rounded-3xl h-[380px] flex flex-col items-center justify-center relative overflow-hidden"
                    >
                        <div className="text-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <p className="text-4xl font-bold text-primary">{stats?.totalSolved || 0}</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Solved</p>
                        </div>
                        <div className="w-full h-full min-h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={120}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'hsl(var(--background))',
                                            borderRadius: '12px',
                                            border: '1px solid hsl(var(--border))',
                                            color: 'hsl(var(--foreground))'
                                        }}
                                        itemStyle={{ color: 'hsl(var(--foreground))' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="flex gap-4 mt-4 text-xs font-semibold text-muted-foreground">
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#10b981]" /> Easy</span>
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#f59e0b]" /> Medium</span>
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#ef4444]" /> Hard</span>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
                        {[
                            { label: 'Global Ranking', value: stats?.ranking && stats.ranking > 0 ? `#${stats.ranking.toLocaleString()}` : 'N/A', icon: <Globe />, color: 'text-sky-500' },
                            { label: 'Contribution', value: stats?.contributionPoints?.toLocaleString() || 0, icon: <Award />, color: 'text-amber-500' },
                            { label: 'Reputation', value: stats?.reputation?.toLocaleString() || 0, icon: <Star />, color: 'text-emerald-500' },
                            { label: 'Current Streak', value: '15 Days', icon: <Zap />, color: 'text-orange-500' },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-6 rounded-2xl flex items-center gap-5"
                            >
                                <div className={`p-4 rounded-xl bg-background border ${item.color}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1 font-medium">{item.label}</p>
                                    <p className="text-2xl font-bold">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Button variant="outline" className="rounded-full px-8" asChild>
                        <a href={`https://leetcode.com/u/${process.env.NEXT_PUBLIC_LEETCODE_USERNAME}`} target="_blank" rel="noopener noreferrer">
                            View LeetCode Profile
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
