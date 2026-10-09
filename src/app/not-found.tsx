import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
        404 · Page not found
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">
        This trail ends here.
      </h1>
      <p className="mt-4 text-base leading-7 text-ink/70">
        The page may have moved, or the address may be incorrect.
      </p>
      <Link
        className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        href="/"
      >
        Return home
      </Link>
    </section>
  );
}
