export default function FunSection() {
  const funFacts = [
    "I love solving complex backend challenges 🧩",
    "Coffee-powered developer ☕",
    "Open source contributor",
    "Always learning new technologies",
    "Hackathon enthusiast 🏆",
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-10 md:p-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Fun Facts
        </h2>

        <div className="space-y-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 hover:shadow-sm transition-all"
            >
              <span className="text-2xl flex-shrink-0">✨</span>
              <p className="text-lg text-slate-700">{fact}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-5">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {["Backend Architecture", "API Design", "DevOps", "Cloud Computing", "Database Optimization"].map(
              (interest) => (
                <span
                  key={interest}
                  className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                  {interest}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
