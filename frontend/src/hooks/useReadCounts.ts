import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'article_read_counts';

function getStoredCounts(): Record<string, number> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function setStoredCounts(counts: Record<string, number>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
  } catch {
    // Ignore storage errors
  }
}

async function tryBackendFetch(): Promise<Record<string, number> | null> {
  try {
    const { createClient } = await import('@metagptx/web-sdk');
    const client = createClient();
    const response = await client.apiCall.invoke({
      url: '/api/v1/reads/all',
      method: 'GET',
      data: {},
    });
    const reads: { article_id: string; read_count: number }[] = response.data?.reads || [];
    const counts: Record<string, number> = {};
    reads.forEach((r) => {
      counts[r.article_id] = r.read_count;
    });
    return counts;
  } catch {
    return null;
  }
}

async function tryBackendIncrement(articleId: string): Promise<{ article_id: string; read_count: number } | null> {
  try {
    const { createClient } = await import('@metagptx/web-sdk');
    const client = createClient();
    const response = await client.apiCall.invoke({
      url: '/api/v1/reads/increment',
      method: 'POST',
      data: { article_id: articleId },
    });
    return response.data || null;
  } catch {
    return null;
  }
}

export function useReadCounts() {
  const [readCounts, setReadCounts] = useState<Record<string, number>>(getStoredCounts);

  const fetchReadCounts = useCallback(async () => {
    // Try backend first
    const backendCounts = await tryBackendFetch();
    if (backendCounts) {
      setReadCounts(backendCounts);
      setStoredCounts(backendCounts);
    }
    // If backend fails, we already have localStorage counts from initial state
  }, []);

  const incrementRead = useCallback(async (articleId: string) => {
    // Try backend first
    const result = await tryBackendIncrement(articleId);
    if (result) {
      setReadCounts((prev) => {
        const updated = { ...prev, [result.article_id]: result.read_count };
        setStoredCounts(updated);
        return updated;
      });
    } else {
      // Fallback: increment locally
      setReadCounts((prev) => {
        const current = prev[articleId] ?? 0;
        const updated = { ...prev, [articleId]: current + 1 };
        setStoredCounts(updated);
        return updated;
      });
    }
  }, []);

  useEffect(() => {
    fetchReadCounts();
  }, [fetchReadCounts]);

  return { readCounts, incrementRead, fetchReadCounts };
}