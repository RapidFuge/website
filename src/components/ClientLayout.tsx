// src/components/ClientLayout.tsx (The correct scrolling background architecture)
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DotGrid from "./DotGrid";
import { Header } from "./Header";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    const dotColor = theme === 'dark' ? '#3f3f46' : '#a1a1aa';
    const activeDotColor = theme === 'dark' ? '#71717a' : '#71717a';

    return (
        <div className="relative isolate min-h-screen">
            <div className="absolute inset-0 z-[-1] bg-white dark:bg-zinc-900">
                {mounted && (
                    <DotGrid
                        className="h-full w-full"
                        dotSize={3.5}
                        gap={24}
                        baseColor={dotColor}
                        activeColor={activeDotColor}
                        proximity={100}
                    />
                )}
            </div>

            <div className="max-w-3xl mx-auto p-4">
                <Header />
                <main className="mt-16">{children}</main>
            </div>
        </div>
    );
}