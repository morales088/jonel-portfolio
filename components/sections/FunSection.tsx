const funFacts = [
  { icon: "🧩", text: "I love solving complex backend challenges — the messier the problem, the better.", color: "bg-violet-50 border-violet-100" },
  { icon: "☕", text: "Coffee-powered developer. At least 2 cups before any production deployment.", color: "bg-amber-50 border-amber-100" },
  { icon: "🤖", text: "Heavy user of AI coding tools — Cursor, Claude, Lovable. I ship fast.", color: "bg-indigo-50 border-indigo-100" },
  { icon: "📦", text: "I've migrated entire databases across cloud providers without downtime.", color: "bg-emerald-50 border-emerald-100" },
  { icon: "🏆", text: "Always learning — currently exploring n8n automations and AI-powered SaaS ideas.", color: "bg-pink-50 border-pink-100" },
];

const interests = [
  "Backend Architecture", "API Design", "DevOps", "Cloud Computing",
  "Database Optimization", "AI Tooling", "Workflow Automation",
];

export default function FunSection() {
  return (
    <div className="animate-fadeIn max-w-3xl mx-auto space-y-4">
      <div className="space-y-3">
        {funFacts.map((fact, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 p-4 rounded-2xl border ${fact.color} transition-all hover:-translate-y-0.5`}
          >
            <span className="text-xl flex-shrink-0 mt-0.5">{fact.icon}</span>
            <p className="text-sm text-slate-700 leading-relaxed">{fact.text}</p>
          </div>
        ))}
      </div>

      <div className="glass border border-slate-200/70 rounded-2xl p-5 shadow-sm">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Interests</p>
        <div className="flex flex-wrap gap-2">
          {interests.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-medium hover:bg-slate-200 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
