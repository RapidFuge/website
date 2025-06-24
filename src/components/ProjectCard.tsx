import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    imageUrl?: string;
    liveUrl?: string;
    githubUrl: string;
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="flex flex-col md:flex-row md:gap-8">
                {project.imageUrl && (
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={project.imageUrl}
                            alt={`${project.title} screenshot`}
                            width={400}
                            height={225}
                            className="rounded-md object-cover"
                        />
                    </div>
                )}


                <div className="flex-1">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                        {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            Source Code
                        </Link>
                        {project.liveUrl && (
                            <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-blue-500 hover:underline">
                                <ExternalLink size={18} />
                                Live Demo
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}