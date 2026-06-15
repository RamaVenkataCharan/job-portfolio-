import { useState, useEffect } from 'react';
import type { GitHubStats, GitHubRepo } from '../types';

const GITHUB_USERNAME = 'RamaVenkataCharan';
const CACHE_KEY = 'github-stats-cache';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

interface CachedData {
  stats: GitHubStats;
  repos: GitHubRepo[];
  timestamp: number;
}

export function useGitHub() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      // Check cache first
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed: CachedData = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_DURATION) {
            setStats(parsed.stats);
            setRepos(parsed.repos);
            setLoading(false);
            return;
          }
        }
      } catch {
        // Cache miss, proceed to fetch
      }

      try {
        const headers: HeadersInit = {
          Accept: 'application/vnd.github.v3+json',
        };

        // Fetch user data
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { headers }
        );
        if (!userRes.ok) throw new Error('Failed to fetch user data');
        const userData = await userRes.json();

        // Fetch repos
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
          { headers }
        );
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData: GitHubRepo[] = await reposRes.json();

        // Calculate stats
        const totalStars = reposData.reduce(
          (sum, repo) => sum + repo.stargazers_count,
          0
        );

        // Calculate language stats
        const langCount: Record<string, number> = {};
        reposData.forEach((repo) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });

        const totalLangs = Object.values(langCount).reduce((a, b) => a + b, 0);
        const langColors: Record<string, string> = {
          Python: '#3572A5',
          JavaScript: '#f1e05a',
          TypeScript: '#3178c6',
          Java: '#b07219',
          C: '#555555',
          HTML: '#e34c26',
          CSS: '#563d7c',
          'Jupyter Notebook': '#DA5B0B',
          Shell: '#89e051',
        };

        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangs) * 100),
            color: langColors[name] || '#00e5ff',
          }));

        const statsData: GitHubStats = {
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          topLanguages,
        };

        // Cache the data
        const cacheData: CachedData = {
          stats: statsData,
          repos: reposData,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

        setStats(statsData);
        setRepos(reposData.slice(0, 6));
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return { stats, repos, loading, error };
}
