export default function MeSection() {
  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-10 md:p-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          About Me
        </h2>
        
        <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
          <p>
            I'm a dedicated IT professional with extensive experience in developing and maintaining web
            applications. I specialize in building robust backend systems and full-stack solutions.
          </p>
          
          <p>
            Skilled in using Laravel for full-stack development and Nest.js for backend
            systems. Proficient in managing projects such as online inventory systems, POS systems, hotel
            booking platforms, task management tools, and school management portals.
          </p>
          
          <p>
            I'm passionate about optimizing APIs, implementing CI/CD pipelines, and creating scalable
            solutions that make a real impact. Currently focusing on building SaaS products that blend
            AI with user-friendly design.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Education</h3>
          <div className="text-slate-700">
            <p className="font-medium">Bachelor of Science in Information Technology</p>
            <p className="text-gray-600">Gardner College, Quezon City, Philippines</p>
            <p className="text-gray-500 text-sm">2014 - 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}
