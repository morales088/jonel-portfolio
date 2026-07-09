import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const KEY = "portfolio:chat_questions";

export async function logQuestion(question: string) {
  const entry = JSON.stringify({
    question,
    timestamp: new Date().toISOString(),
  });
  await redis.lpush(KEY, entry);
}

export async function getAndClearQuestions(): Promise<{ question: string; timestamp: string }[]> {
  const raw = await redis.lrange(KEY, 0, -1);
  if (raw.length === 0) return [];
  await redis.del(KEY);
  return (raw as string[])
    .map((r) => JSON.parse(r))
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
}
