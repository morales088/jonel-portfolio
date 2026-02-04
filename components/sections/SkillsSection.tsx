export default function SkillsSection() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    Backend: ["PHP", "Laravel", "Nest.js", "Node.js"],
    Database: ["MySQL", "PostgreSQL", "MongoDB"],
    Tools: ["Git", "GitHub Actions", "Docker", "AWS", "Cloudflare", "Linux", "NGINX"],
  };

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-10 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
          Skills & Expertise
        </h2>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-slate-700 mb-5 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Expertise</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-medium">• Full-stack Development</p>
              <p className="font-medium">• API Design & Architecture</p>
              <p className="font-medium">• Cloud & Server Management</p>
            </div>
            <div>
              <p className="font-medium">• CI/CD & DevOps</p>
              <p className="font-medium">• Database Optimization</p>
              <p className="font-medium">• No-Code Platforms (Webflow, Shopify)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
