import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoryService } from "@/lib/api/story-service";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(value));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryService().getBySlug(slug);

  return story
    ? { title: story.title, description: story.excerpt }
    : { title: "Story not found" };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = await getStoryService().getBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        className="text-sm font-semibold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        href="/#latest-stories"
      >
        ← Back to latest stories
      </Link>
      <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
        Sample story · {story.category}
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
        {story.title}
      </h1>
      <time
        className="mt-5 block text-sm text-ink/60"
        dateTime={story.publishedAt}
      >
        {formatDate(story.publishedAt)}
      </time>
      <div className="mt-10 space-y-6 text-lg leading-8 text-ink/80">
        {story.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
