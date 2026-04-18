import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "NEXT MBA",        label: "Client Work",   slug: "nextmba",   gradient: "from-blue-600 to-indigo-700" },
  { title: "TaskPrio",        label: "Internal Tool", slug: "taskprio",  gradient: "from-violet-600 to-purple-700" },
  { title: "GRocket",         label: "Order System",  slug: "grocket",   gradient: "from-orange-500 to-red-600" },
  { title: "Online Inventory",label: "POS System",    slug: "inventory", gradient: "from-pink-500 to-rose-600" },
  { title: "RUCS — OOH",      label: "Client Work",   slug: "rucs",      gradient: "from-emerald-500 to-teal-600" },
];

const highlights = [
  { name: "NEXT MBA",          desc: "Full-stack platform for business education with admin and member portals." },
  { name: "TaskPrio",          desc: "Real-time task management built with Nest.js, MongoDB, and Socket.io." },
  { name: "GRocket",           desc: "Order management system with seamless inventory integration." },
  { name: "RUCS — OOH",        desc: "Out-of-home advertising portfolio covering billboard, LED, transit & train campaigns nationwide." },
];

export default function ProjectsSection() {
  return (
    <div className="animate-fadeIn max-w-5xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>

      <div className="glass border border-slate-200/70 rounded-2xl p-6 shadow-sm">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Highlights</p>
        <div className="space-y-3">
          {highlights.map((h, i) => (
            <div key={h.name} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <span className="text-sm font-semibold text-slate-800">{h.name}</span>
                <span className="text-sm text-slate-500"> — {h.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4 pt-4 border-t border-slate-100">
          Currently focused on SaaS products that blend AI with user-friendly design. Ask me about any project for more details.
        </p>
      </div>
    </div>
  );
}
