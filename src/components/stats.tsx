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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);
            try {
                const username = process.env.NEXT_PUBLIC_LEETCODE_USERNAME || 'Rudresh_M_R';
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
                const data = await response.json();

                if (data.status === 'success') {
                    setStats({
                        totalSolved: data.totalSolved,
                        easySolved: data.easySolved,
                        mediumSolved: data.mediumSolved,
                        hardSolved: data.hardSolved,
                        ranking: data.ranking,
                        contributionPoints: data.contributionPoints || 0,
                        reputation: data.reputation || 0,
                    });
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching LeetCode stats:', err);
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const chartData = stats ? [
        { name: 'Easy', value: stats.easySolved, color: '#00b8a3' },
        { name: 'Medium', value: stats.mediumSolved, color: '#ffc01e' },
        { name: 'Hard', value: stats.hardSolved, color: '#ff375f' },
    ] : [];

    return (
        <section id="stats" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Code className="text-primary" /> Coding Stats
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Chart Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 glass p-8 rounded-3xl h-[400px] flex flex-col items-center justify-center relative overflow-hidden"
                    >
                        <div className="text-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <p className="text-4xl font-bold">{stats?.totalSolved || 0}</p>
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
                                            color: 'white'
                                        }}
                                        itemStyle={{ color: 'white' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="flex gap-4 mt-4 text-xs font-semibold">
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#00b8a3]" /> Easy</span>
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#ffc01e]" /> Medium</span>
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#ff375f]" /> Hard</span>
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {[
                            { label: 'Global Ranking', value: `#${stats?.ranking?.toLocaleString() || 'N/A'}`, icon: <Globe />, color: 'text-blue-500' },
                            { label: 'Contribution', value: stats?.contributionPoints || 0, icon: <Award />, color: 'text-yellow-500' },
                            { label: 'Reputation', value: stats?.reputation || 0, icon: <Star />, color: 'text-purple-500' },
                            { label: 'Current Streak', value: '15 Days', icon: <Zap />, color: 'text-orange-500' },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-6 rounded-2xl flex items-center gap-6"
                            >
                                <div className={`p-4 rounded-xl bg-background border ${item.color}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
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
