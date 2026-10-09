import Link from "next/link";
import { getStoryService } from "@/lib/api/story-service";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default async function Home() {
  const stories = await getStoryService().listLatest({ limit: 2 });

  return (
    <div>
      <section className="hero-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Personal journal · travel · technology
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
              Explore. Learn. Build. Preserve.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              RideNXplore is a place for stories from the road, ideas worth
              exploring, and the lessons gathered along the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href="#latest-stories"
              >
                Read the latest stories
              </Link>
              <Link
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href="/about/"
              >
                About RideNXplore
              </Link>
            </div>
          </div>
          <p className="max-w-sm border-l-2 border-accent pl-5 text-base leading-7 text-ink/70 lg:justify-self-end">
            A personal record of discovering new places, learning by doing,
            and making time for what matters.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="latest-stories-heading"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
        id="latest-stories"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              From the journal
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              id="latest-stories-heading"
            >
              Latest stories
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink/60">
            Preview stories are illustrative sample content and should be
            replaced with owner-reviewed articles.
          </p>
        </div>

        {stories.length > 0 ? (
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {stories.map((story) => (
              <li
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8"
                key={story.id}
              >
                <p className="text-sm font-semibold capitalize text-accent">
                  {story.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">
                  <Link
                    className="rounded-sm hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    href={`/stories/${story.slug}/`}
                  >
                    {story.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  {story.excerpt}
                </p>
                <time
                  className="mt-6 block text-sm text-ink/55"
                  dateTime={story.publishedAt}
                >
                  {formatDate(story.publishedAt)}
                </time>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 rounded-xl border border-dashed border-ink/20 p-6 text-ink/70">
            No stories have been published yet. Please check back soon.
          </p>
        )}
      </section>
    </div>
  );
}
