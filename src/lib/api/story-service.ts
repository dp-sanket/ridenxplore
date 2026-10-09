import type { ContentCategory, Story } from "@/types/domain";

export interface StoryService {
  listLatest(options?: { limit?: number }): Promise<Story[]>;
  getBySlug(slug: string): Promise<Story | null>;
  listByCategory(category: ContentCategory): Promise<Story[]>;
}

const mockStories: readonly Story[] = [
  {
    id: "story-long-road",
    slug: "the-long-road-why-i-started-this-website",
    title: "The Long Road: Why I Started This Website",
    excerpt:
      "A starting point for collecting the journeys, questions, and lessons that shape RideNXplore.",
    content: [
      "RideNXplore is a place to keep the stories and ideas that might otherwise get lost in the rush of everyday life.",
      "The road ahead is a chance to explore, learn, build, and preserve the moments that make the journey meaningful.",
    ],
    publishedAt: "2026-10-09T00:00:00.000Z",
    category: "journal",
    tags: ["journey", "site"],
    coverImage: null,
    status: "published",
  },
  {
    id: "story-letters-001",
    slug: "letters-to-future-sanket-001",
    title: "Letters to Future Sanket #001",
    excerpt:
      "A note to remember what this moment feels like, and the small things worth carrying forward.",
    content: [
      "This letter is a pause: a chance to notice what is happening now before it becomes a memory.",
      "Keep making room for curiosity, meaningful work, and the people who make every journey better.",
    ],
    publishedAt: "2026-10-08T00:00:00.000Z",
    category: "journal",
    tags: ["reflection", "letters"],
    coverImage: null,
    status: "published",
  },
];

const mockStoryService: StoryService = {
  async listLatest(options) {
    const limit = options?.limit ?? mockStories.length;
    return mockStories
      .filter((story) => story.status === "published")
      .toSorted(
        (first, second) =>
          Date.parse(second.publishedAt) - Date.parse(first.publishedAt),
      )
      .slice(0, limit);
  },

  async getBySlug(slug) {
    return (
      mockStories.find(
        (story) => story.slug === slug && story.status === "published",
      ) ?? null
    );
  },

  async listByCategory(category) {
    return mockStories.filter(
      (story) =>
        story.category === category && story.status === "published",
    );
  },
};

export function getStoryService(): StoryService {
  return mockStoryService;
}
