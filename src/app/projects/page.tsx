import { ProjectCard, Project } from "@/components/ProjectCard";

const projectsData: Project[] = [
    {
        title: "Dinosonic",
        description: "A fast, lightweight music streaming server built with Deno, inspired by Subsonic. ",
        techStack: ["Deno", "SQL", "Hono", "Docker", "ffmpeg"],
        imageUrl: "https://avatars.githubusercontent.com/u/203427183?s=5120&v=4",
        githubUrl: "https://github.com/sonicdino/dinosonic",
    },
    {
        title: "Rapid Host",
        description: "A File Hosting & URL Shortening Service ",
        techStack: ["Node.JS", "Next.JS", "MongoDB", "MinIO"],
        imageUrl: "https://raw.githubusercontent.com/RapidFuge/host/refs/heads/main/public/favicon.ico",
        liveUrl: "https://i.fuge.dev",
        githubUrl: "https://github.com/rapidfuge/host",
    },
    {
        title: "Caplet",
        description: "A Linux-native screenshot and file sharing utility inspired by ShareX. It provides a simple, efficient way to capture screenshots, upload files, and shorten URLs with configurable services. ",
        techStack: ["go", "linux", "X11", "Wayland"],
        githubUrl: "https://github.com/rapidfuge/caplet",
    },
];

export default function ProjectsPage() {
    return (
        <div className="space-y-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <h1 className="text-4xl font-bold tracking-tight">Things I&apos;ve made</h1>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    A selection of projects that I&apos;ve developed
                </p>
            </div>

            <div className="space-y-6">
                {projectsData.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}