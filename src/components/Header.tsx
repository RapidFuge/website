import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header className="sticky top-4 z-10 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="font-bold text-lg hover:text-blue-500 transition-colors">
                    RapidFuge
                </Link>
                <nav className="flex items-center space-x-4 text-zinc-600 dark:text-zinc-400">
                    <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        Contact
                    </Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}