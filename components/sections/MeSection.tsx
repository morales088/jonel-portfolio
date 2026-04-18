const highlights = [
  { label: "Years Experience", value: "7+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Stack", value: "Full" },
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
      <div className="glass border border-slate-200/70 rounded-2xl p-6 shadow-sm space-y-3 text-slate-600 text-sm leading-relaxed">
        <p>
          I'm a dedicated IT professional specializing in robust backend systems and full-stack web
          applications — from online inventories and POS systems to task management tools and school portals.
        </p>
        <p>
          I work primarily with <span className="font-semibold text-slate-800">Laravel</span> and{" "}
          <span className="font-semibold text-slate-800">Nest.js</span>, with a strong focus on API
          optimization, CI/CD pipelines, and cloud infrastructure on AWS and Cloudflare.
        </p>
        <p>
          Currently building SaaS products that blend AI with clean, user-friendly design — using tools
          like n8n, Make.com, and Cursor to move fast and ship well.
        </p>
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
