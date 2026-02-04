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
  gradient = "from-purple-600 to-pink-600",
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div
        className={`
        relative h-80 rounded-3xl overflow-hidden cursor-pointer
        transition-all hover:scale-[1.03] hover:shadow-xl
        bg-gradient-to-br ${gradient} shadow-lg
      `}
      >
        {/* Label */}
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
            {label}
          </span>
        </div>

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-end">
          {image ? (
            <div className="absolute inset-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/20 text-8xl font-bold">{title.charAt(0)}</div>
            </div>
          )}

          {/* Title */}
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
