import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities. The best (and currently, only) way to reach me is via email.
            </p>

            <div className="mt-8 space-y-4">
                <Link href="mailto:rapidfuge@proton.me" className="flex items-center gap-3 text-lg group">
                    <Mail className="text-zinc-400 group-hover:text-blue-500 transition-colors" size={24} />
                    <span className="group-hover:text-blue-500 transition-colors">rapidfuge@proton.me</span>
                </Link>
                {/* <Link href="https://linkedin.com/" target="_blank" className="flex items-center gap-3 text-lg group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 group-hover:text-blue-500 transition-colors" width="24" height="24" fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                    <span className="group-hover:text-blue-500 transition-colors">Connect on LinkedIn</span>
                </Link> */}
            </div>
        </div>
    );
}