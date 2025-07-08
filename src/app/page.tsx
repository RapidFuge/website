// src/app/page.tsx
import Link from "next/link";
// 1. Import from lucide-react
import { Mail } from "lucide-react";

export default function HomePage() {
  return (
    <section className="bg-white dark:bg-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <h1 className="text-4xl font-bold tracking-tight">
        Hi, I&apos;m RapidFuge 👋
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        I&apos;m a (future) Computer Engineer with a focus on backend systems. I build and maintain the server-side logic, databases, and APIs that power modern web applications.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="https://github.com/rapidfuge"
          target="_blank"
          className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        </Link>
        <Link
          href="https://git.fuge.dev"
          target="_blank"
          className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" aria-hidden="true"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" /></svg>
        </Link>
        {/* <Link
          href="https://linkedin.com"
          target="_blank"
          className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
        </Link> */}
        <Link
          href="mailto:rapidfuge@proton.me"
          className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </Link>
      </div>

      <div className="mt-12">
        <Link href="/projects" className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          View My Work
        </Link>
      </div>
    </section>
  );
}