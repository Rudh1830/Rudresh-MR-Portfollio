import { NextResponse } from 'next/server';

export async function GET() {
    const username = process.env.NEXT_PUBLIC_LEETCODE_USERNAME || 'Rudresh_M_R';

    // We can try multiple APIs in order of reliability
    const apis = [
        `https://leetcode-api-faisalshohag.vercel.app/${username}`,
        `https://alfa-leetcode-api.onrender.com/${username}`,
        `https://leetcode-stats-api.herokuapp.com/${username}`
    ];

    for (const url of apis) {
        try {
            const response = await fetch(url, { next: { revalidate: 3600 } });
            if (!response.ok) continue;

            const data = await response.json();

            // Format data to a consistent structure
            if (data.totalSolved !== undefined || data.status === 'success') {
                return NextResponse.json({
                    totalSolved: data.totalSolved,
                    easySolved: data.easySolved,
                    mediumSolved: data.mediumSolved,
                    hardSolved: data.hardSolved,
                    ranking: data.ranking || 0,
                    contributionPoints: data.contributionPoint || data.contributionPoints || 0,
                    reputation: data.reputation || 0,
                });
            }
        } catch (error) {
            console.error(`Failed to fetch from ${url}:`, error);
        }
    }

    return NextResponse.json({ error: 'Failed to fetch LeetCode stats' }, { status: 500 });
}
