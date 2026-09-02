// Pure, isomorphic podcast types + shaping helpers. Safe to import from client
// components AND from build-time loaders — it does NO I/O (no `fetch`, no
// `node:fs`). The data comes from framework `loader`s that read the committed
// JSON off disk at build time (see app/lib/podcastData.server.ts); those loaders
// serialize the result into the prerendered HTML, so the full episode summary
// ships in the raw markup for non-JS crawlers. Mirror of src/lib/news.ts.

/** hosted = our own show (Advisor Ally). guest = Vineet featured on another show. */
export type PodcastKind = 'hosted' | 'guest';

export type PodcastChapter = {
  /** Display timestamp, e.g. "12:30". */
  time: string;
  /** Seconds into the video — drives the deep-link ?t= and the schema. */
  seconds: number;
  label: string;
};

export type PodcastIndexEntry = {
  slug: string;
  title: string;
  kind: PodcastKind;
  /** "Advisor Ally" for hosted; the external show/channel name for guest spots. */
  show: string;
  /** Episode number for the Advisor Ally series; null for the webinar / guest spots. */
  episode: number | null;
  guest: string;
  guestTitle: string;
  youtubeId: string;
  date: string | null;
  durationSeconds: number | null;
  excerpt: string;
};

export type PodcastEpisode = PodcastIndexEntry & {
  /** <title> for the episode page; falls back to `title` when unset. */
  seoTitle: string | null;
  description: string;
  host: string;
  takeaways: string[];
  chapters: PodcastChapter[];
  /** The long editorial summary, rendered from markdown to HTML at build time. */
  content: string;
};

export type PodcastIndexFile = { count: number; items: PodcastIndexEntry[] };

/** hqdefault is always present (unlike maxres) — safe default card image. */
export function youtubeThumb(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

/** Privacy-enhanced (youtube-nocookie) embed so the iframe drops no ad cookies. */
export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

/** Canonical watch URL, optionally deep-linked to `seconds` for chapter links. */
export function youtubeWatchUrl(id: string, seconds?: number): string {
  const base = `https://www.youtube.com/watch?v=${id}`;
  return seconds ? `${base}&t=${seconds}s` : base;
}

/** ISO 8601 duration ("PT33M4S") for schema.org VideoObject/PodcastEpisode. */
export function isoDuration(seconds: number | null): string | undefined {
  if (!seconds || seconds < 0) return undefined;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `PT${h ? `${h}H` : ''}${m ? `${m}M` : ''}${s ? `${s}S` : ''}` || 'PT0S';
}

/** Human duration for the card / meta line, e.g. "33 min" or "1 hr 12 min". */
export function formatDuration(seconds: number | null): string {
  if (!seconds || seconds < 0) return '';
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  if (h && m) return `${h} hr ${m} min`;
  if (h) return `${h} hr`;
  return `${Math.max(1, m)} min`;
}

/**
 * Same display format as the blog/news, pinned to UTC so the official publish
 * date does not slide a day in western timezones.
 */
export function formatPodcastDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** YYYY-MM-DD for a <time datetime="…"> attribute. */
export function dateAttr(iso: string | null): string | undefined {
  if (!iso) return undefined;
  return iso.slice(0, 10);
}

/** "12:30" / "1:02:03" → seconds. Returns null on anything malformed. */
export function parseTimestamp(ts: string): number | null {
  const parts = ts.trim().split(':').map((p) => Number(p));
  if (parts.some((n) => Number.isNaN(n))) return null;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 1) return parts[0];
  return null;
}
