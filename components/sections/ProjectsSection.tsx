import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "NEXT MBA",
      label: "Client Work",
      slug: "nextmba",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "TaskPrio",
      label: "Internal Tool",
      slug: "taskprio",
      gradient: "from-green-600 to-teal-600",
    },
    {
      title: "GRocket",
      label: "Order System",
      slug: "grocket",
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Online Inventory",
      label: "POS System",
      slug: "inventory",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
          My Projects
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-10 md:p-12 max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I've got some cool projects under my belt! 🎯 Here are a few highlights:
          </p>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <div>
                <span className="font-semibold">NEXT MBA</span> - Full-stack platform for business education
                with admin and member portals.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <div>
                <span className="font-semibold">TaskPrio</span> - Real-time task management tool built with
                Nest.js and MongoDB for collaborative workflows.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <div>
                <span className="font-semibold">GRocket</span> - Order management system with seamless
                inventory integration.
              </div>
            </li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Right now, I'm all about building SaaS products that blend AI with user-friendly design. Got any
            specific project you wanna know more about?
          </p>
        </div>
      </div>
    </div>
  );
}
