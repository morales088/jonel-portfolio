const categories = [
  {
    name: "Frontend",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    badge: "bg-blue-100 text-blue-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js"],
  },
  {
    name: "Backend",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    badge: "bg-violet-100 text-violet-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3m-16.5 0a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3M6.75 6a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v3H6.75V6Z" />
      </svg>
    ),
    skills: ["PHP", "Laravel", "Nest.js", "Node.js"],
  },
  {
    name: "Database",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    badge: "bg-emerald-100 text-emerald-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Neon PostgreSQL", "Prisma"],
  },
  {
    name: "Tools & DevOps",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    badge: "bg-orange-100 text-orange-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    skills: ["Git", "GitHub Actions", "Docker", "AWS", "Cloudflare", "Linux", "NGINX", "Render.com"],
  },
  {
    name: "Automation & AI",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    badge: "bg-pink-100 text-pink-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    skills: ["n8n", "Make.com", "Cursor", "Lovable", "Claude"],
  },
  {
    name: "Design & No-Code",
    color: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    badge: "bg-cyan-100 text-cyan-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    skills: ["Figma", "Photoshop", "Canva", "Webflow", "Shopify"],
  },
];

const expertiseItems = [
  "Full-stack Development",
  "API Design & Architecture",
  "Cloud & Server Management",
  "Rapid Prototyping with AI Tools",
  "CI/CD & DevOps",
  "Database Optimization",
  "Workflow Automation",
  "No-Code Platforms",
];

export default function SkillsSection() {
  return (
    <div className="animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">
          Skills & Expertise
        </h2>
        <p className="text-slate-500 text-center mb-10">Technologies and tools I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`rounded-2xl border ${cat.border} ${cat.bg} p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-sm`}>
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-slate-800 text-base">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${cat.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expertise */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h3 className="font-semibold text-slate-800 text-base mb-4">Additional Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {expertiseItems.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
