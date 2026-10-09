import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Travel", href: "/travel/" },
  { label: "Technology", href: "/technology/" },
  { label: "Finance", href: "/finance/" },
  { label: "Journal", href: "/journal/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "About", href: "/about/" },
];

export const metadata: Metadata = {
  title: {
    default: "RideNXplore | Explore. Learn. Build. Preserve.",
    template: "%s | RideNXplore",
  },
  description:
    "A personal journal of travel, motorcycle rides, technology, and the lessons gathered along the way.",
};

function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-surface/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link
          aria-label="RideNXplore home"
          className="w-fit text-xl font-bold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="/"
        >
          Ride<span className="text-accent">NX</span>plore
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="rounded-sm py-1 text-sm font-medium text-ink/75 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            className="text-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="/"
          >
            RideNXplore
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-surface/70">
            Stories from the road, ideas worth exploring, and lessons worth
            keeping.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-surface/80">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          className="skip-link"
          href="#main-content"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
