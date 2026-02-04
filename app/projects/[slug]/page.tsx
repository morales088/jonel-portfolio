import Link from "next/link";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const projectData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  link?: string;
  gradient: string;
}> = {
  nextmba: {
    title: "NEXT MBA",
    description: "Full-stack platform for business education",
    longDescription: "A comprehensive business education platform featuring separate admin and member portals. Built with modern web technologies to provide a seamless learning experience with course management, user authentication, and progress tracking.",
    tools: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS"],
    link: "https://nextmba.com",
    gradient: "from-blue-600 to-indigo-600",
  },
  taskprio: {
    title: "TaskPrio",
    description: "Real-time task management tool",
    longDescription: "Enhanced task management platform built for collaborative workflows. Features real-time updates, task prioritization, team collaboration tools, and comprehensive analytics. Designed for both small teams and enterprise use.",
    tools: ["Nest.js", "MongoDB", "React", "Socket.io", "AWS"],
    link: "https://taskpr.io",
    gradient: "from-green-600 to-teal-600",
  },
  grocket: {
    title: "GRocket",
    description: "Order management system",
    longDescription: "Comprehensive order management system with seamless inventory integration. Provides real-time order tracking, automated stock updates, and detailed reporting for e-commerce businesses.",
    tools: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    link: "https://g-rocket.me",
    gradient: "from-orange-600 to-red-600",
  },
  inventory: {
    title: "Online Inventory System",
    description: "POS and inventory management",
    longDescription: "Custom online inventory system handling both backend and frontend development. Features include real-time stock tracking, automated reordering, sales analytics, and POS integration for seamless transaction management.",
    tools: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    gradient: "from-purple-600 to-pink-600",
  },
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          {/* Hero Section */}
          <div className={`h-64 md:h-96 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
            <div className="text-white/20 text-9xl font-bold absolute">
              {project.title.charAt(0)}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {project.description}
            </p>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Tools Used */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            {project.link && (
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl transition-all hover:bg-slate-800 hover:scale-105"
                >
                  Visit Project
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
