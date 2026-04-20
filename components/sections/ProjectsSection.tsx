import ProjectCard from "@/components/ProjectCard";

const clientProjects = [
  { title: "NEXT MBA",          label: "Client Work", slug: "nextmba",       gradient: "from-blue-600 to-indigo-700" },
  { title: "RUCS — OOH",        label: "Client Work", slug: "rucs",          gradient: "from-emerald-500 to-teal-600" },
  { title: "GRocket",           label: "Client Work", slug: "grocket",       gradient: "from-orange-500 to-red-600" },
  { title: "Online Inventory",  label: "Client Work", slug: "inventory",     gradient: "from-pink-500 to-rose-600" },
  { title: "George Motorbikes", label: "Client Work", slug: "george",        gradient: "from-yellow-500 to-amber-600" },
  { title: "Compound",          label: "Client Work", slug: "compound",      gradient: "from-cyan-500 to-blue-600" },
  { title: "Hairless Dream",    label: "Client Work", slug: "hairlessdream", gradient: "from-purple-400 to-pink-500" },
];

const vibeProjects = [
  { title: "TaskPrio", label: "Vibe Code", slug: "taskprio", gradient: "from-violet-600 to-purple-700" },
];

export default function ProjectsSection() {
  return (
    <div className="animate-fadeIn max-w-5xl mx-auto space-y-8">

      {/* Client Project Samples */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Client Project Samples</span>
          <div className="flex-1 h-px bg-slate-200/70" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {clientProjects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </div>

      {/* Vibe Code */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Vibe Code</span>
          <div className="flex-1 h-px bg-slate-200/70" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {vibeProjects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </div>

    </div>
  );
}
