const highlights = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Stack", value: "Full" },
];

const experience = [
  {
    role: "Freelance Fullstack Developer · Automation & AI",
    company: "Upwork / Independent",
    period: "2025 – Present",
    gradient: "from-orange-500 to-amber-600",
    bullets: [
      "Building and delivering full-stack web applications for international clients via Upwork.",
      "Developing AI-powered tools and automation workflows using n8n, Make.com, and Claude AI.",
      "Creating custom automation solutions that reduce manual work and improve business efficiency.",
      "Integrating LLMs and AI APIs into client products for smarter, faster user experiences.",
    ],
  },
  {
    role: "Backend Developer",
    company: "NEXT MBA / Freelance",
    period: "2021 – 2025",
    gradient: "from-indigo-500 to-violet-600",
    bullets: [
      "Developed robust backend systems for task management tools and school portals using Nest.js.",
      "Integrated PostgreSQL, MongoDB, and AWS to enhance performance and scalability.",
      "Designed and implemented CI/CD pipelines using GitHub Actions for automated deployments on Render.com.",
      "Migrated databases from AWS to Neon PostgreSQL, reducing hosting costs while maintaining efficiency.",
      "Optimized APIs and server response times, improving system performance by 30%.",
      "Built and maintained Laravel-based applications for inventory and POS systems.",
    ],
  },
  {
    role: "Web Developer",
    company: "Fruitwishes International Corp",
    period: "April 2018 – January 2020",
    gradient: "from-emerald-500 to-teal-600",
    bullets: [
      "Led system integrations that improved transaction processing efficiency and scalability.",
      "Developed custom inventory and POS systems using Laravel, MySQL, Bootstrap, and jQuery.",
      "Designed and implemented an API for the POS system with real-time stock updates and transaction sync.",
      "Created scalable MySQL queries to efficiently handle large datasets.",
      "Integrated CI/CD pipelines to automate testing and deployments.",
    ],
  },
];

export default function MeSection() {
  return (
    <div className="animate-fadeIn max-w-3xl mx-auto space-y-4">

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {highlights.map((h) => (
          <div key={h.label} className="glass border border-slate-200/70 rounded-2xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-slate-900">{h.value}</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">{h.label}</p>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="glass border border-slate-200/70 rounded-2xl p-6 shadow-sm space-y-4 text-slate-600 text-sm leading-relaxed">
        <p className="text-slate-700 leading-relaxed">
          I&apos;m <span className="font-semibold text-slate-900">John Neil</span>, a fullstack developer and automation engineer with{" "}
          <span className="font-semibold text-slate-900">5+ years</span> of experience turning business problems into clean, working software.
          I&apos;ve built everything from inventory systems and SaaS platforms to AI-powered tools — and I know how to deliver
          without overcomplicating things.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Whether you&apos;re starting from zero or scaling something that already exists, here&apos;s where I come in:
        </p>
        <div className="space-y-2.5">
          {[
            { icon: "✅", text: "You need a custom web system — I build it from scratch, clean and scalable." },
            { icon: "🚀", text: "You have an existing platform that needs new features — I extend it without breaking what's already working." },
            { icon: "🔗", text: "Your tools don't talk to each other — I connect them through automation and API integrations." },
            { icon: "💡", text: "You want to launch a SaaS product — I help you go from idea to live product." },
            { icon: "⚙️", text: "You're using GoHighLevel — I set it up, customize it, and integrate it with your other systems." },
            { icon: "💳", text: "You need to accept payments online — I integrate Stripe, PayPal, or whatever gateway you use." },
            { icon: "🌐", text: "You need a website fast — I build it on Webflow, Shopify, or custom code." },
          ].map((item) => (
            <div key={item.icon} className="flex items-start gap-3">
              <span className="text-base leading-snug flex-shrink-0">{item.icon}</span>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-100">
          <p className="font-semibold text-slate-700 text-sm">The result?</p>
          <p className="mt-1 text-slate-500">
            ⏱️ Less manual work.&nbsp;&nbsp;❌ Fewer errors.&nbsp;&nbsp;📈 A system your team can actually use — and that grows with your business.
          </p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="glass border border-slate-200/70 rounded-2xl p-6 shadow-sm space-y-5">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Work Experience</p>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.company} className="flex gap-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <p className="font-semibold text-slate-800 text-sm">{job.role}</p>
                  <span className="text-slate-400 text-xs">·</span>
                  <p className="text-slate-600 text-sm">{job.company}</p>
                </div>
                <p className="text-xs text-slate-400 mt-0.5 mb-2">{job.period}</p>
                <ul className="space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="glass border border-slate-200/70 rounded-2xl p-5 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-slate-800 text-sm">Bachelor of Science in Information Technology</p>
            <p className="text-slate-500 text-sm">Gardner College, Quezon City, Philippines</p>
            <p className="text-xs text-slate-400 mt-0.5">2014 – 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}
