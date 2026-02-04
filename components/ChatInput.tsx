"use client";

interface ChatInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  isLoading?: boolean;
}

export default function ChatInput({ value: propValue, onChange, onSubmit, isLoading }: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (propValue && onSubmit && !isLoading) {
      onSubmit(propValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          value={propValue || ""}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Ask me anything about my resume..."
          disabled={isLoading}
          className="w-full px-6 py-4 pr-16 text-base rounded-2xl bg-white shadow-md border border-slate-200 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!propValue?.trim() || isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-md transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
