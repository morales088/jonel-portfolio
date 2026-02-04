interface BannerProps {
  message: string;
  actionText?: string;
  actionHref?: string;
  variant?: "warning" | "info";
}

export default function Banner({
  message,
  actionText,
  actionHref,
  variant = "warning",
}: BannerProps) {
  const bgColor = variant === "warning" ? "bg-yellow-200" : "bg-blue-200";
  const textColor = variant === "warning" ? "text-yellow-900" : "text-blue-900";

  return (
    <div className={`${bgColor} border-b border-black/10`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            className={`w-5 h-5 ${textColor}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span className={`${textColor} text-sm font-medium`}>{message}</span>
        </div>
        {actionText && actionHref && (
          <a
            href={actionHref}
            className={`${textColor} text-sm font-medium hover:underline flex items-center gap-1`}
          >
            {actionText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
