export type ContentCategory =
  | "travel"
  | "technology"
  | "finance"
  | "journal";

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: readonly string[];
  publishedAt: string;
  category: ContentCategory;
  tags: readonly string[];
  coverImage: ImageAsset | null;
  status: "draft" | "published";
}
