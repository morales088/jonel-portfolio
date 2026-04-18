import Link from "next/link";

interface ProjectCardProps {
  title: string;
  label: string;
  slug: string;
  image?: string;
  gradient?: string;
}

export default function ProjectCard({
  title,
  label,
  slug,
  image,
  gradient = "from-indigo-500 to-violet-600",
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className={`relative h-52 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-br ${gradient}`}>
        {/* Noise overlay for depth */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

        {/* Label */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs font-semibold text-white">
            {label}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-1 group-hover:translate-x-0">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>

        {image && (
          <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-40" />
          </div>
        )}

        {/* Big letter bg */}
        {!image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 text-[7rem] font-black select-none leading-none">
              {title.charAt(0)}
            </span>
          </div>
        )}

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
