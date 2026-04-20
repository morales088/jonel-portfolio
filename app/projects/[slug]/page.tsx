import Link from "next/link";

interface ProjectPageProps {
  params: { slug: string };
}

interface ProjectLink {
  label: string;
  url: string;
}

const projectData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  links?: ProjectLink[];
  gradient: string;
}> = {
  nextmba: {
    title: "NEXT MBA",
    description: "Full-stack platform for business education",
    longDescription: "A comprehensive business education platform featuring separate admin and member portals. Built with modern web technologies to provide a seamless learning experience with course management, user authentication, and progress tracking.",
    tools: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS"],
    links: [
      { label: "Main Site",       url: "https://nextmba.com" },
      { label: "Admin Portal",    url: "https://admin.nextmba.com" },
      { label: "Members Portal",  url: "https://members.nextmba.com" },
    ],
    gradient: "from-blue-600 to-indigo-700",
  },
  george: {
    title: "George Motorbikes",
    description: "Client Work — Motorbike dealership website",
    longDescription: "A professional website for George Motorbikes, showcasing their motorbike inventory and dealership services. Built with a focus on clean presentation and easy navigation for potential buyers.",
    tools: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    links: [
      { label: "Visit Site", url: "https://georgesmotorbikes.com" },
    ],
    gradient: "from-yellow-500 to-amber-600",
  },
  compound: {
    title: "Compound",
    description: "Client Work — Growth platform",
    longDescription: "A full-stack growth platform for Compound, providing tools and resources to help businesses scale and optimize their operations.",
    tools: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS"],
    links: [
      { label: "Visit Site", url: "https://compoundgrowth.xyz" },
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  hairlessdream: {
    title: "Hairless Dream",
    description: "Client Work — Salon & electrology",
    longDescription: "A salon and electrology clinic website for Hairless Dream, featuring service listings, booking information, and a clean modern design to attract and inform potential clients.",
    tools: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    links: [
      { label: "Visit Site", url: "https://hairlessdreamelectrology.com/" },
    ],
    gradient: "from-purple-400 to-pink-500",
  },
  taskprio: {
    title: "TaskPrio",
    description: "Real-time task management tool",
    longDescription: "Enhanced task management platform built for collaborative workflows. Features real-time updates, task prioritization, team collaboration tools, and comprehensive analytics. Designed for both small teams and enterprise use.",
    tools: ["Nest.js", "MongoDB", "React", "Socket.io", "AWS"],
    links: [
      { label: "Visit Project", url: "https://taskpr.io" },
    ],
    gradient: "from-violet-600 to-purple-700",
  },
  grocket: {
    title: "GRocket",
    description: "Client Work — Order management system",
    longDescription: "Comprehensive order management system with seamless inventory integration. Provides real-time order tracking, automated stock updates, and detailed reporting for e-commerce businesses.",
    tools: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    links: [
      { label: "Visit Project", url: "https://g-rocket.me/" },
    ],
    gradient: "from-orange-500 to-red-600",
  },
  inventory: {
    title: "Online Inventory System",
    description: "Client Work — POS and inventory management",
    longDescription: "Custom online inventory system handling both backend and frontend development. Features include real-time stock tracking, automated reordering, sales analytics, and POS integration for seamless transaction management.",
    tools: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    gradient: "from-pink-500 to-rose-600",
  },
  rucs: {
    title: "RUCS — OOH",
    description: "Client Work — Out-of-Home advertising portfolio",
    longDescription: "Full-stack OOH advertising portfolio for RUCS, showcasing billboard, LED, transit, train, and small format campaigns across Luzon, Visayas, and Mindanao. Built to highlight nationwide outdoor media placements with a clean, browsable portfolio experience.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Visit Site", url: "https://www.rucs.ph/" },
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-mesh flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">Project Not Found</h1>
          <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh">
      <div className="max-w-3xl mx-auto px-5 py-12">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 font-medium mb-8 transition-colors group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>

        {/* Hero banner */}
        <div className={`h-48 md:h-64 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-end p-6 mb-6 relative overflow-hidden shadow-lg`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 text-[10rem] font-black select-none leading-none">
              {project.title.charAt(0)}
            </span>
          </div>
          <div className="relative z-10">
            <p className="text-white/70 text-sm font-medium mb-1">{project.description}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
          </div>
        </div>

        {/* Content card */}
        <div className="glass border border-slate-200/70 rounded-2xl p-6 shadow-sm space-y-6">
          <p className="text-slate-600 text-sm leading-relaxed">{project.longDescription}</p>

          {/* Tools */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="px-3 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Live Links</p>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-br ${project.gradient} text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all`}
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
